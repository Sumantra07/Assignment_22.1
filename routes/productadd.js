var express = require("express");
var router = express.Router();
var Prod = require("../models/Product");
// POST -Create new
router.post("/", function (req, res) {
    var title = req.body.title;
    var desc = req.body.description;
    var brand = req.body.brand;
    var availability = req.body.availability;
    
    var prod = new Prod();
    prod.title = title;
    prod.description = desc;
    prod.brand = brand;
    if(availability === 'on')
    prod.availability = true;
    else {
      prod.availability = false;
    }
    prod.save().then(function (prod) {
    res.render('productEntry', { title: "Product Added!!"});
    });
    
  });
    
    router.get("/", function (req, res) {
     
      res.render('productEntry', { title: "Add a Product!"});
      });
    
  
      module.exports = router;