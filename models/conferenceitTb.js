const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConferenceitTb', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    confName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'conf_name'
    },
    confStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'conf_start_date'
    },
    confEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'conf_end_date'
    },
    confApplydlDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'conf_applydl_date'
    },
    confLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'conf_link'
    },
    confDetails: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'conf_details'
    },
    confAddressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'conf_address_tb',
        key: 'add_id'
      },
      field: 'conf_address_id'
    },
    confOrganizeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'conf_organize_tb',
        key: 'org_id'
      },
      field: 'conf_organize_id'
    }
  }, {
    sequelize,
    tableName: 'conferenceit_tb',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "conferenceit_tb_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
