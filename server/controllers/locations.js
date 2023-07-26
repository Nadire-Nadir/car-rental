const Location = require("../models/location");
const locationsRouter = require("express").Router();

locationsRouter.get("/", async (request, response) => {
  try {
    const { query } = request.query;

    const filter = {
      $or: [
        { name: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
        { region: { $regex: query, $options: "i" } },
      ],
    };

    const locations = await Location.find(filter);

    response.json(locations);
  } catch (error) {
    response.status(500).json({ error: "Internal server error" });
  }

  // const locations = await Location.find({});

  // response.json(locations);
});

locationsRouter.post("/", async (request, response) => {
  const body = request.body;

  const location = new Location(body);

  const savedLocation = await location.save();

  response.status(201).json(savedLocation.toJSON());
});

module.exports = locationsRouter;
