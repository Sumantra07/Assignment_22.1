var express = require("express");
var router = express.Router();
var Prod = require("../models/Product");
//GET - complete list
router.get("/", function (req, res) {
    Prod.find().then(function (prod) {
    res.render('productlist', { title: "Product Overview", data: prod});
  });
});
// GET - one with ID
router.get("/:id", function (req, res) {
  var id = req.params.id;
  
  Prod.findById(id).then(function (prod) {
  res.render('productdetails',{title: "Product Details", data: prod});
  });

});
// POST -Create new
router.post("/", function (req, res) {
  var title = req.body.title;
  var desc = req.body.description;
  var brand = req.body.brand;
  var availability = req.body.availability;

  var prod = new Product();
  var desc = req.body.description;
  var brand = req.body.brand;
  var availability = req.body.availability;

  prod.title = title;
  prod.desc = desc;
  prod.brand = brand;
  prod.availability = availability;

  prod.save().then(function (prod) {
  res.render('productEntry', { title: "Add a Product!", data: prod});
  });

});

module.exports = router;
