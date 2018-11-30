var mongoose = require("mongoose");

//Schema Creation
var ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required : true },
    brand: { type: String, required : true },
    availability : {type: Boolean, required:true}
  },
  {
    timestamps: true //createdAt: '', updatedAt: ''
  },
  {
    _id: {type: mongoose.Schema.ObjectId, select: false},
  }
);

//Model Creation
var Product = mongoose.model("Prod", ProductSchema);

module.exports = Product;
