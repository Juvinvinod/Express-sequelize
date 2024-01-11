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
      'contacts',
      [
        {
          name: 'John Doe',
          phone_number: 8907244273,
          user_id: 1,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Jane Doe',
          phone_number: 8907253271,
          user_id: 2,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'kyle Doe',
          phone_number: 9907253271,
          user_id: 3,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Rome Doe',
          phone_number: 9907253786,
          user_id: 4,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Rodrigo',
          phone_number: 7707253786,
          user_id: 5,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Asper',
          phone_number: 7707253126,
          user_id: 6,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Ronny',
          phone_number: 9637253126,
          user_id: 7,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Emily Thompson',
          phone_number: 9637258526,
          user_id: 8,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Benjamin Walker',
          phone_number: 9637258864,
          user_id: 9,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Sophia White',
          phone_number: 9172258864,
          user_id: 10,
          spam_reported: false,
          createdAt: '2024-01-11 18:40:28.531+05:30',
          updatedAt: '2024-01-11 18:40:28.531+05:30',
        },
        {
          name: 'Daniel Taylor',
          phone_number: 9172224464,
          user_id: 11,
          spam_reported: false,
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
    await queryInterface.bulkDelete('contacts', null, {});
  },
};
