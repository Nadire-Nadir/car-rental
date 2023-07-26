const Booking = require("../models/booking");
const bookingsRouter = require("express").Router();

bookingsRouter.get("/", async (request, response) => {
  const bookings = await Booking.find({});

  response.json(bookings);
});

bookingsRouter.post("/", async (request, response) => {
  const body = request.body;

  const booking = new Booking(body);

  const savedBooking = await booking.save();
  //   const savedBooking = await Booking.insertMany(body);

  response.status(201).json(savedBooking);
});

module.exports = bookingsRouter;
