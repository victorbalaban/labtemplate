"use strict";

const cinema = require('../models').cinema;

exports.list = function (req, res) {
  cinema.findAll().then(cinema => {
    res.jsonp(cinema);
  });
};

exports.create = function (req, res) {
  res.jsonp(cinema.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  cinema.findById(id).then(cinema => {
    res.jsonp(cinema);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  cinema.findById(req.params.id)
    .then(cinema => {
      if (!cinema) {
        return res.status(400).send({
          message: 'Cinema Not Found',
        });
      }
      return cinema
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  cinema.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d cinema', numberAffected);
      return res.send(202);
  });
}