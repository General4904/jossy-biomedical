require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const applicationRoute = require("./router/applicationRoute");
const registerApplicant = require("./controller/registerApplicant");

// Start server
const PORT = process.env.PORT || 3000;
app.listen(3000, console.log(`Port open at port: ${PORT}`));

// Server public fles
app.use(express.static(path.join(__dirname, "public")));

// Parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
app.use("/app", applicationRoute);

// Connect to mongodb
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connection successful`);
  } catch (err) {
    console.error(err);
  }
};
connectToDb();
