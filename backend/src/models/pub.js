'use strict';
module.exports = (sequelize, DataTypes) => {
  var pub = sequelize.define('pub', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    program: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pub;
};