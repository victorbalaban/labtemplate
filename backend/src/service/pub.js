"use strict";

const pub = require('../models').pub;

exports.list = function (req, res) {
  pub.findAll().then(pub => {
    res.jsonp(pub);
  });
};

exports.create = function (req, res) {
  res.jsonp(pub.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  pub.findById(id).then(pub => {
    res.jsonp(pub);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  pub.findById(req.params.id)
    .then(pub => {
      if (!pub) {
        return res.status(400).send({
          message: 'Pub Not Found',
        });
      }
      return pub
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  pub.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d pub', numberAffected);
      return res.send(202);
  });
}