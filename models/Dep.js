const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dep extends Model {}
// model frame goes here with - datatypes attributes

Dep.init(
  {
    // table collumns
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dep_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Departments",
  }
);

module.exports = Dep;
