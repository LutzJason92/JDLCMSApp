const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Emp extends Model {}
// model frame goes here with - datatypes attributes

Emp.init({
  // table collumns
  //   {
  //     sequelize,
  //     timestamps: false,
  //     freezeTableName: true,
  //     underscored: true,
  //     modelName: 'Emp',
  //   }
});

module.exports = Emp;
