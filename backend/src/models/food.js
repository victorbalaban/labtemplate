'use strict';
module.exports = (sequelize, DataTypes) => {
  var food = sequelize.define('food', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING,
    program: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return food;
};