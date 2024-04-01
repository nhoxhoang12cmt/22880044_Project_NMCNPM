var DataTypes = require("sequelize").DataTypes;
var _ConfAddressTb = require("./confAddressTb");
var _ConfOrganizeTb = require("./confOrganizeTb");
var _ConferenceitTb = require("./conferenceitTb");

function initModels(sequelize) {
  var ConfAddressTb = _ConfAddressTb(sequelize, DataTypes);
  var ConfOrganizeTb = _ConfOrganizeTb(sequelize, DataTypes);
  var ConferenceitTb = _ConferenceitTb(sequelize, DataTypes);

  ConferenceitTb.belongsTo(ConfAddressTb, { foreignKey: "confAddressId"});
  ConfAddressTb.hasMany(ConferenceitTb, { foreignKey: "confAddressId"});
  ConferenceitTb.belongsTo(ConfOrganizeTb, {  foreignKey: "confOrganizeId"});
  ConfOrganizeTb.hasMany(ConferenceitTb, {  foreignKey: "confOrganizeId"});

  return {
    ConfAddressTb,
    ConfOrganizeTb,
    ConferenceitTb,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
