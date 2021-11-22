const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

class Room extends Model {}

Room.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "rooms",
    modelName: "rooms",
  }
);

module.exports = Room;