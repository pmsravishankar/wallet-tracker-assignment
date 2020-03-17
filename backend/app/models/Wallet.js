'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    amount: DataTypes.STRING,
    wallet_type: DataTypes.STRING
  }, {});
  Wallet.associate = function(models) {
    // associations can be defined here
  };
  return Wallet;
};