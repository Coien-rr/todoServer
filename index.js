require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./config/dbConnect.js");
const { logger } = require("./middleware/logEvents.js");
const errorHandler = require("./middleware/errorHandler.js");
const PORT = process.env.PORT || 3500;
const app = express();

// Connect to MongoDB
connectDB();

app.use(logger);

app.use(express.json());

// Crosee Origin Resource Sharing
// NOTE: set whitelist
app.use(cors());

app.use("/user", require("./routes/api/users.js"));
app.use("/workplace", require("./routes/api/workplace.js"));

app.use(errorHandler);

mongoose.connection.once("open", () => {
	console.log("Connect to MongoDB successfully! 🎉");
	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}! 🚀`);
	});
});
