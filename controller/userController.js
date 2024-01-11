const { matchedData } = require('express-validator');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const { Op } = require('sequelize');
const { User, Contact, Spam } = require('../models');

// check if a phone number exists else create a new user
const createUser = async (req, res) => {
  try {
    const data = matchedData(req); // validated data
    const numberExists = await User.findAll({
      where: {
        phone_number: data.phone_number,
      },
    }); // check if a number already exists
    if (numberExists.length !== 0) {
      return res.status(403).json({
        status: 'failed',
        message: 'Phone number already exists!',
      });
    }
    const hashedPass = await bcrypt.hash(data.password, 10); // password hashed here
    data.password = hashedPass;
    data.token = uuidv4(); // create a token
    const user = await User.create({
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
      token: data.token,
    });
    await Contact.create({
      name: user.name,
      phone_number: user.phone_number,
      user_id: user.id,
    });
    return res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Database error',
      data: '',
    });
  }
};

// send login details if valid
const login = async (req, res) => {
  try {
    const data = matchedData(req); // validated data
    const user = await User.findOne({
      where: {
        phone_number: data.phone_number,
      },
    }); // check if the user exists
    if (user.length === 0) {
      return res.status(422).json({
        status: 'failed',
        message: 'phone number is incorrect/does not exist',
        data: '',
      });
    }
    const validPassword = await bcrypt.compare(data.password, user.password); // verify password
    if (!validPassword) {
      return res.status(422).json({
        status: 'failed',
        message: 'Entered password is incorrect',
        data: '',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Database error',
      data: '',
    });
  }
};

// report a spam
const reportSpam = async (req, res) => {
  try {
    const data = matchedData(req); // validated data
    const validId = await Contact.findOne({
      where: {
        id: data.contact_id,
      },
    }); // check if the contact_id send is valid
    if (!validId) {
      return res.status(422).json({
        status: 'failed',
        message: 'Contact id does not exists!',
        data: '',
      });
    }
    const alreadyMarked = await Spam.findOne({
      where: {
        contact_id: data.contact_id,
        user_id: data.user_id,
      },
    }); // check if the number is already reported by the user
    if (alreadyMarked) {
      return res.status(422).json({
        status: 'failed',
        message: 'Number already reported as spam',
        data: '',
      });
    }
    await Spam.create({
      contact_id: data.contact_id,
      user_id: data.user_id,
    });
    return res.status(200).json({
      status: 'success',
      message: 'Number reported as spam!',
      data: '',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Database error',
      data: '',
    });
  }
};

// search for a name or number
const search = async (req, res) => {
  try {
    const data = matchedData(req); // validated data
    const { name, number, page, pageSize } = data; // destructuring
    if (name && number) {
      return res.status(422).json({
        status: 'failed',
        message: 'Only one of name or number allowed!!',
        data: '',
      });
    } // check if both number and name is send as query
    const offset = page * pageSize;
    const limit = pageSize;
    let query = '';
    if (name) {
      query = {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `${name}%`,
            },
          },
          {
            name: {
              [Op.iLike]: `%${name}%`,
              [Op.notILike]: `%${name}%`,
            },
          },
        ],
      };
    } else {
      query = {
        phone_number: number,
      };
    }
    let result = await Contact.findAll({
      limit,
      offset,
      where: query,
      include: [User],
      order: [['name', 'ASC']],
    });
    if (number) {
      result = result.filter((response) => response.user_id);
    }
    return res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'Database error',
      data: '',
    });
  }
};

module.exports = {
  createUser,
  login,
  reportSpam,
  search,
};
