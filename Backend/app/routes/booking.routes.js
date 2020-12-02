module.exports = app => {
    const bookings = require("../controllers/booking.controller.js");
  
    app.post("/bookings", bookings.create);
  
    app.get("/bookings", bookings.findAll);
  
    app.get("/bookings/:bookingId", bookings.findOne);
  
    app.put("/bookings/:bookingId", bookings.update);

    app.delete("/bookings/:bookingId", bookings.delete);

    app.delete("/bookings", bookings.deleteAll);
  };