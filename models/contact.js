const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Spam, User }) {
      // define association here
      // this.hasMany(Spam, { foreignKey: 'contact_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Contact.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      spam_reported: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'contacts',
      modelName: 'Contact',
    },
  );
  return Contact;
};
