const sql = require("./db.js");

const Customer = function(customer) {
  this.customername = customer.customername;
  this.customerusername = customer.customerusername;
  this.customeremail = customer.customeremail;
  this.customerpassword = customer.customerpassword;
  this.customeraddress = customer.customeraddress;
  this.bookingid = customer.bookingid;
  this.hotelid = customer.hotelid;
  this.numberkids = customer.numberkids;
  this.numberadults = customer.numberadults;
};

Customer.create = (newCustomer, result) => {
  sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { customerid: res.insertId, ...newCustomer });
    result(null, { customerid: res.insertId, ...newCustomer });
  });
};

Customer.findById = (customerId, result) => {
  sql.query(`SELECT * FROM customers WHERE customerid = ${customerId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found customer: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Customer.getAll = result => {
  sql.query("SELECT * FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Customer.updateById = (customerid, customer, result) => {
  sql.query(
    "UPDATE customers SET customername = ?, customeremail= ?, customerusername = ?,customerpassword = ?, bookingid = ?, hotelid = ?, numberkids = ?, numberadults = ? WHERE customerid = ?",
    [customer.customername, customer.customeremail, customer.customerusername, customer.customerpassword, customer.bookingid, customer.hotelid, customer.numberkids, customer.numberadults, customerid],
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

      console.log("updated customer: ", { customerid: customerid, ...customer });
      result(null, { customerid: customerid, ...customer });
    }
  );
};

Customer.remove = (customerid, result) => {
  sql.query("DELETE FROM customers WHERE customerid = ?", customerid, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted customer with id: ", customerid);
    result(null, res);
  });
};

Customer.removeAll = result => {
  sql.query("DELETE FROM customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Customer;