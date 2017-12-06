'use strict';
module.exports = (sequelize, DataTypes) => {
  var cinema = sequelize.define('cinema', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    genre: DataTypes.STRING,
    room: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cinema;
};