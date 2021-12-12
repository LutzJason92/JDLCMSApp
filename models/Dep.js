const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dep extends Model {}
// model frame goes here with - datatypes attributes

Dep.init({
  // table collumns
  //   {
  //     sequelize,
  //     timestamps: false,
  //     freezeTableName: true,
  //     underscored: true,
  //     modelName: 'Dep',
  //   }
});

module.exports = Dep;
