const Hotel = require("../models/hotel.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Cannot be empty!"
      });
    }
  
    const hotel = new Hotel({
      hotelname: req.body.hotelname,
      roomtype: req.body.roomtype,
      price: req.body.price,
      area: req.body.area,
      timein: req.body.timein,
      timeout: req.body.timeout
    });
  
    Hotel.create(hotel, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error creating the Hotel."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Hotel.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error retrieving hotels."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Hotel.findById(req.params.hotelId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Hotel with id ${req.params.hotelId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Hotel with id " + req.params.hotelId
          });
        }
      } else res.send(data);
    });  
  
};

exports.update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Cannot be empty!"
      });
    }
  
    Hotel.updateById(
      req.params.hotelId,
      new Hotel(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Hotel with id ${req.params.hotelId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Hotel with id " + req.params.hotelId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Hotel.remove(req.params.hotelId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Hotel with id ${req.params.hotelId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Hotel with id " + req.params.hotelId
          });
        }
      } else res.send({ message: `Hotel was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Hotel.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error while removing all hotels."
        });
      else res.send({ message: `All Hotels were deleted successfully!` });
    });
  
  
};