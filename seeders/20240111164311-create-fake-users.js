/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john@gmail.com',
          phone_number: 8907244273,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c701369-324a-495e-a78a-12842b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Jane Doe',
          email: 'jane@gmail.com',
          phone_number: 8907253271,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c701369-324a-495e-a78a-138422b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'kyle Doe',
          email: 'kyle@gmail.com',
          phone_number: 9907253271,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c701369-324a-495e-a78a-13876352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Rome Doe',
          email: 'Rome@gmail.com',
          phone_number: 9907253786,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c701369-324a-495e-a78a-172542352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Rodrigo',
          email: 'Rodrigo@gmail.com',
          phone_number: 7707253786,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c701369-234a-495e-a78a-172542352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Asper',
          email: 'Asper@gmail.com',
          phone_number: 7707253126,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c7781269-234a-495e-a78a-172542352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Ronny',
          email: 'Ronny@gmail.com',
          phone_number: 9637253126,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c2234269-234a-495e-a78a-172542352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Emily Thompson',
          email: 'Emily@gmail.com',
          phone_number: 9637258526,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c2234269-234a-189e-a78a-172542352b65e24d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Benjamin Walker',
          email: 'Benjamin@gmail.com',
          phone_number: 9637258864,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c2234269-234a-189e-a78a-172542352b62356d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Sophia White',
          email: 'Sophia@gmail.com',
          phone_number: 9172258864,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c2234269-234a-100e-a23a-172542352b62356d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Daniel Taylor',
          email: 'Daniel@gmail.com',
          phone_number: 9172224464,
          password:
            '$2b$10$1Jz3g1sqWj.dgxQIc4ANfu3NX7w2kdiy6HSTA8fkwJDQkAvcLS72y',
          token: '5c2772669-234a-100e-a23a-172542367b62356d',
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
