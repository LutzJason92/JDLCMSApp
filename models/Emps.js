const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Emp extends Model {}
// model frame goes here with - datatypes attributes

Emp.init(
  {
    // table collumns
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Emp",
  }
);

module.exports = Emp;
