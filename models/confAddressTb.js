const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConfAddressTb', {
    addId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'add_id'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conf_address_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "conf_address_tb_pkey",
        unique: true,
        fields: [
          { name: "add_id" },
        ]
      },
    ]
  });
};
