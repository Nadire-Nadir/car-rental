require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: Number,
    required: true,
  },
  millage: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    emum: ["Automatic", "Manual"],
  },
  PricePerDay: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["Small", "Medium", "Large", "Estate", "Premium", "Minivans", "SUVs"],
  },
  power: {
    type: String,
    enum: [
      "Petrol",
      "Diesel",
      "Hybrid(all)",
      "Hybrid(pet/elec)",
      "Hybrid(dl/elec)",
      "Electric",
    ],
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
});

carSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
