const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our Webpage" });
});

require("./app/routes/customer.routes.js")(app);
require("./app/routes/hotel.routes.js")(app);
require("./app/routes/booking.routes.js")(app);

app.listen(2678, () => {
  console.log("Server has started at http://localhost:2678");
});