const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Role = require("./Role");

class Emps extends Model {}
// model frame goes here with - datatypes attributes

Emps.init(
  {
    // table collumns
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Role,

        // This is the column name of the referenced model
        key: "role_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Employees",
  }
);

module.exports = Emps;
