'use strict';
module.exports = (sequelize, DataTypes) => {
  var sport = sequelize.define('sport', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    description: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sport;
};