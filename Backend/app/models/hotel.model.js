const sql = require("./db.js");

const Hotel = function(hotel) {
  this.hotelname = hotel.hotelname;
  this.roomtype = hotel.roomtype;
  this.price = hotel.price;
  this.area = hotel.area;
  this.timein = hotel.timein;
  this.timeout = hotel.timeout;
};

Hotel.create = (newHotel, result) => {
  sql.query("INSERT INTO hotels SET ?", newHotel, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created hotel: ", { hotelid: res.insertId, ...newHotel });
    result(null, { hotelid: res.insertId, ...newHotel });
  });
};

Hotel.findById = (hotelId, result) => {
  sql.query(`SELECT * FROM hotels WHERE hotelid = ${hotelId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found hotel: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Hotel.getAll = result => {
  sql.query("SELECT * FROM hotels", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("hotels: ", res);
    result(null, res);
  });
};

Hotel.updateById = (hotelid, hotel, result) => {
  sql.query(
    "UPDATE hotels SET hotelname = ?, roomtype = ?, price = ?, area = ?, timein = ?, timeout = ? WHERE hotelid = ?",
    [hotel.hotelname, hotel.roomtype, hotel.price, hotel.area, hotel.timein, hotel.timeout, hotelid],
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

      console.log("updated hotel: ", { hotelid: hotelid, ...hotel });
      result(null, { hotelid: hotelid, ...hotel });
    }
  );
};

Hotel.remove = (hotelid, result) => {
  sql.query("DELETE FROM hotels WHERE hotelid = ?", hotelid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted hotel with id: ", hotelid);
    result(null, res);
  });
};

Hotel.removeAll = result => {
  sql.query("DELETE FROM hotels", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} hotels`);
    result(null, res);
  });
};

module.exports = Hotel;