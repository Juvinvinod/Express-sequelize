const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Spam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Contact }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Contact, { foreignKey: 'contact_id' });
    }
  }
  Spam.init(
    {
      contact_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'spams',
      modelName: 'Spam',
    },
  );
  return Spam;
};
