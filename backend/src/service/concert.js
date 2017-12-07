"use strict";

const concert = require('../models').concert;

exports.list = function (req, res) {
  concert.findAll().then(concert => {
    res.jsonp(concert);
  });
};

exports.create = function (req, res) {
  res.jsonp(concert.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  concert.findById(id).then(concert => {
    res.jsonp(concert);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  concert.findById(req.params.id)
    .then(concert => {
      if (!concert) {
        return res.status(400).send({
          message: 'concert Not Found',
        });
      }
      return concert
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  concert.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d concert', numberAffected);
      return res.send(202);
  });
}