'use strict';
module.exports = (sequelize, DataTypes) => {
  var concert = sequelize.define('concert', {
    name: DataTypes.STRING,
    band: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    genre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return concert;
};