const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Role = require("./Role");

class Emps extends Model {}

Emps.init(
  {
    // table columns
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
    is_manager: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      references: {
        // This is a reference to another model
        model: Role,

        // This is the column name of the referenced model
        key: "is_manager",
      },
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
