const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors())

app.get("/", (request, response, next) => {
  response.json({
    message: "Hello World",
  });
});

const userRoutes = require("./controller/UserRoutes")
app.use("/users", userRoutes);

const emotionRoutes = require("./controller/EmotionRoutes")
app.use("/emotions", emotionRoutes);

app.get("*", (request, response) => {
  response.status(404).json({
    message: "Page not found"
  })
})

app.use((error, request, response, next) => {
  response.status(500).json({
    message: "Error occurred in the server",
    error: error.message,
  });
});

module.exports = {
  app,
};
