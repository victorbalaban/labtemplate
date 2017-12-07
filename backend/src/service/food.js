"use strict";

const food = require('../models').food;

exports.list = function (req, res) {
  food.findAll().then(food => {
    res.jsonp(food);
  });
};

exports.create = function (req, res) {
  res.jsonp(food.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  food.findById(id).then(food => {
    res.jsonp(food);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  food.findById(req.params.id)
    .then(food => {
      if (!food) {
        return res.status(400).send({
          message: 'Food Not Found',
        });
      }
      return food
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  food.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d food', numberAffected);
      return res.send(202);
  });
}