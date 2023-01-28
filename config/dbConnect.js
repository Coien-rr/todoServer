const mongoose = require("mongoose");

const URI =
	"mongodb+srv://Cooper:sZU4vVcCgRzvVLHb@todocluster.tnijtxq.mongodb.net/todoServer?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	} catch (err) {
		console.error(err);
	}
};

module.exports = connectDB;
