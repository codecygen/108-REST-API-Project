const express = require("express");
const app = express();

const feedRoutes = require("./routes/feedRoutes");

// CORS Error Prevention
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

// REST API deals with JSON data, don't use it.
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

app.use("/feed", feedRoutes);

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});
