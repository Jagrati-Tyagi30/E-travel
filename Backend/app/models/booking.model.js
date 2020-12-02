const sql = require("./db.js");

const Booking = function(booking) {
  this.paymentmode = booking.paymentmode;
  this.customerid = booking.customerid;
  this.hotelid = booking.hotelid;
  this.bookingdate = booking.bookingdate;
};

Booking.create = (newBooking, result) => {
  sql.query("INSERT INTO bookings SET ?", newBooking, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created booking: ", { bookingid: res.insertId, ...newBooking });
    result(null, { bookingid: res.insertId, ...newBooking });
  });
};

Booking.findById = (bookingId, result) => {
  sql.query(`SELECT * FROM bookings WHERE bookingid = ${bookingId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found booking: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Booking.getAll = result => {
  sql.query("SELECT * FROM bookings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("bookings: ", res);
    result(null, res);
  });
};

Booking.updateById = (bookingid, booking, result) => {
  sql.query(
    "UPDATE bookings SET paymentmode = ?, customerid = ?, hotelid = ?, bookingdate = ? WHERE bookingid = ?",
    [booking.paymentmode, booking.customerid, booking.hotelid, booking.bookingdate, bookingid],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated booking: ", { bookingid: bookingid, ...booking });
      result(null, { bookingid: bookingid, ...booking });
    }
  );
};

Booking.remove = (bookingid, result) => {
  sql.query("DELETE FROM bookings WHERE bookingid = ?", bookingid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted booking with id: ", bookingid);
    result(null, res);
  });
};

Booking.removeAll = result => {
  sql.query("DELETE FROM bookings", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} bookings`);
    result(null, res);
  });
};

module.exports = Booking;