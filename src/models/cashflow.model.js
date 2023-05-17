const { sequelize } = require("../../config/db.config");
const { DataTypes } = require("sequelize");

const cashflow = sequelize.define(
  "timeSeries",
  {
    inflow: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    outflow: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    branch: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false,
  }
);

module.exports = cashflow;
