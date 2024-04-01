const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConfOrganizeTb', {
    orgId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'org_id'
    },
    organize: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'conf_organize_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "conf_organize_tb_pkey",
        unique: true,
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
};
