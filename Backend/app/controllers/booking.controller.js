const Booking = require("../models/booking.model.js");

exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Cannot be empty!"
      });
    }
  
    const booking = new Booking({
      paymentmode: req.body.paymentmode,
      customerid: req.body.customerid,
      hotelid: req.body.hotelid,
      bookingdate: req.body.bookingdate
    });
  
    Booking.create(booking, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error creating the Booking."
        });
      else res.send(data);
    });
  
};

exports.findAll = (req, res) => {
    Booking.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error retrieving bookings."
        });
      else res.send(data);
    });  
  
};

exports.findOne = (req, res) => {
    Booking.findById(req.params.bookingId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Booking with id ${req.params.bookingId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Booking with id " + req.params.bookingId
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
  
    Booking.updateById(
      req.params.bookingId,
      new Booking(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Booking with id ${req.params.bookingId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Booking with id " + req.params.bookingId
            });
          }
        } else res.send(data);
      }
    );  
  
};

exports.delete = (req, res) => {
    Bookingr.remove(req.params.bookingId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Booking with id ${req.params.bookingId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Booking with id " + req.params.bookingId
          });
        }
      } else res.send({ message: `Booking was deleted successfully!` });
    });
  
  
};

exports.deleteAll = (req, res) => {
    Booking.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Error while removing all bookings."
        });
      else res.send({ message: `All bookings were deleted successfully!` });
    });
  
  
};