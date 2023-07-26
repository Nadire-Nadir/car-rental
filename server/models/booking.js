require("dotenv").config();
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Completed", "unpaid"],
    default: "unpaid",
  },
  pickupLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  returnLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
});

bookingSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
