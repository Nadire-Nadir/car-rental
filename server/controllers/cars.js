const Booking = require("../models/booking");
const Car = require("../models/car");
const { info } = require("../utils/logger");
const carsRouter = require("express").Router();

carsRouter.get("/", async (request, response) => {
  try {
    const { startDate, endDate, locationId, page, limit } = request.query;

    if (!startDate || !endDate || !locationId) {
      return response.status(400).json({
        error:
          "All 'start date', 'end date' and 'locationId' must be provided in the query.",
      });
    }

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);

    const overlappingBookings = await Booking.find({
      $or: [
        {
          startDate: { $lte: parsedEndDate },
          endDate: { $gte: parsedStartDate },
        },
        {
          startDate: { $gte: parsedStartDate },
          endDate: { $lte: parsedEndDate },
        },
      ],
    }).select("car startDate endDate");

    const overlappingCarIds = new Set(
      overlappingBookings.map((booking) => booking.car.toString())
    );

    const cars = await Car.find({ location: locationId });

    const availableCars = cars.filter(
      (car) => !overlappingCarIds.has(car._id.toString())
    );

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedCars = availableCars.slice(startIndex, endIndex);

    response.json({
      totalCars: availableCars.length,
      totalPages: Math.ceil(availableCars.length / limit),
      currentPage: parseInt(page),
      cars: paginatedCars,
    });
  } catch (error) {
    console.error("Error while fetching available cars:", error);
    response
      .status(500)
      .json({ error: "An error occurred while fetching available cars." });
  }

  // const cars = await Car.find({});
  // response.json(cars);
});

carsRouter.post("/", async (request, response) => {
  const body = request.body;

  const car = new Car(body);
  // const savedCar = await car.save();
  const savedCar = await Car.insertMany(body);
  response.status(201).json(savedCar.toJSON());
});

carsRouter.put("/:id", async (request, response) => {
  const body = request.body;
  const id = request.params.id;

  const carToUpdate = await Car.findById(id);
  const updatedCar = await Car.findByIdAndUpdate(id, body, { new: true });

  info(`car ${carToUpdate.name} successfully updated`);
  response.status(200).json(updatedCar.toJSON());
});

module.exports = carsRouter;
