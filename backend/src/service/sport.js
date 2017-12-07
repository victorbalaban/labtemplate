"use strict";

const sport = require('../models').sport;

exports.list = function (req, res) {
  sport.findAll().then(sport => {
    res.jsonp(sport);
  });
};

exports.create = function (req, res) {
  res.jsonp(sport.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  sport.findById(id).then(sport => {
    res.jsonp(sport);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  sport.findById(req.params.id)
    .then(sport => {
      if (!sport) {
        return res.status(400).send({
          message: 'Sport Not Found',
        });
      }
      return sport
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  sport.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d sport', numberAffected);
      return res.send(202);
  });
}