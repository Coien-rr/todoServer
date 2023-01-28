const User = require("../model/User.js");

const getAllUsers = async (req, res) => {
	const users = await User.find();
	console.log(users);
	if (!users) {
		return res.status(204).json({
			message: "No Users Found!",
		});
	}
	res.json(users);
};

const createNewUser = async (req, res) => {
	console.log(req.body);
	const { email, userName, passWard } = req.body;
	if (!email || !passWard) {
		return res.status(400).json({ message: "email and passWard are required" });
	}

	const isUserExist = await User.findOne({
		userName: userName,
	}).exec();
	if (isUserExist) return res.sendStatus(409);

	try {
		const result = await User.create({
			email: email,
			userName: userName,
			passWard: passWard,
		});

		console.log(result);

		res.status(201).json({ successMsg: `New user ${userName} created!` });
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	getAllUsers,
	createNewUser,
};
