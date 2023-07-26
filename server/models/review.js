require("dotenv").config();
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.objectId,
    ref: "Car",
    required: true,
  },
  cleanlines: {
    type: Number,
    required: true,
  },
  condition: {
    type: Number,
    required: true,
  },
  pickUpSpeed: {
    type: Number,
    required: true,
  },
  dropOffSpeed: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

reviewSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
