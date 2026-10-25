require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

const healthRoutes = require("./routes/healthRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");



app.get("/", (req, res) => {
  res.json({ message: "Welcome to AI DocMate API" });
});

app.use("/api/health", healthRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;