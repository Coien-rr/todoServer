const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workplaceSchema = new Schema({
	workplaceName: {
		type: String,
		required: true,
	},
	workplaceIcon: {
		type: String,
		required: true,
	},
	userID: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Workplace", workplaceSchema);
