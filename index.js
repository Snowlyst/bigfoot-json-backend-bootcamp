const express = require("express");
const { getSightings } = require("./utils.js");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings/:index", async (req, res) => {
  const sightings = await getSightings();
  const index = req.params.index;
  res.json(sightings[index]);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
