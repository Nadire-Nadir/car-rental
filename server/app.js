const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { info, errors } = require("./utils/logger");
const carsRouter = require("./controllers/cars");
const locationsRouter = require("./controllers/locations");
const usersRouter = require("./controllers/users");
const bookingsRouter = require("./controllers/bookings");
const { unknownEndpoint } = require("./utils/middleware");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    info("conncted to MongoDB");
  })
  .catch((error) => {
    errors("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/cars", carsRouter);
app.use("/api/locations", locationsRouter);
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter);

app.use(unknownEndpoint);

module.exports = app;
