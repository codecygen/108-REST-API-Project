const express = require("express");
const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

const feedRoutes = require("./routes/feedRoutes");

app.use("/feed", feedRoutes);

const SERVER_PORT = 3000;
app.listen(SERVER_PORT, () => {
  console.log(`Server started on port ${SERVER_PORT}`);
});
