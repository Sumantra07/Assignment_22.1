  // IMPORTANT
  // PLEASE Read the Readme.txt before you run the application //
  var express = require('express');
  var router = express.Router();
  var Prod = require("../models/Product");
  /* GET home page. */
  router.get('/', function (req, res, next) {

    res.render('index', { title: "Product Overview"});

  });
  /* POST to home page. */
    router.post('/', function (req, res) {
    var electronicproduct = [{ title: '32 inch LED Television', brand:'Panasonic', description: 'Full HD Display', availability : true}, 
                             { title: '32 inch LED Television', brand:'Sony', description: 'Full HD Display', availability : true },
                             { title: '42 inch LED Television', brand:'Sony', description: 'Full HD Display, Complete Smart TV', availability : true },
                             { title: '46 inch 4k Television', brand:'LG', description: '4K Display', availability : true },
                             { title: '32 inch 4k Television', brand:'Vu', description: '4K Display', availability : false },
                             { title: '21 inch LED', brand:'LG', description: 'LED Entry level', availability : true },
                             { title: '21 inch LED', brand:'Samsung', description: 'LED Entry level', availability : true },
                             { title: '61 inch LED', brand:'Huwaei', description: 'Full HD Display', availability : true },
                             { title: '61 inch LED', brand:'LG', description: 'Full HD Display', availability : true },
                             { title: '61 inch 4K', brand:'LG', description: '4K Display , Fully smart TV', availability : false }];
                             
     Prod.createCollection().then(function(collection) {
     console.log('Collection is created!');
      });
     Prod.insertMany(electronicproduct).then(function (prod) {
      console.log("Products are created");
      res.redirect("\product");
     });                     
    
  });
  // DELETE - one with id
router.post("/delete", function (req, res) {
  
  Prod.remove({ availability: false }).then(function (prod) {
  res.send("Product deleted succesfully!!");
  });
});

  module.exports = router;

