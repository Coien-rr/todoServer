const Workplace = require("../model/Workplace.js");

const getAllWorkplace = async (req, res) => {
	// console.log(req.query);
	if (!req.query.userID) {
		return res.status(400).json({
			message: "Bad Request: params|userID is required! ",
		});
	}

	const queryUserID = req.query.userID;
	const workplaces = await Workplace.find({
		userID: queryUserID,
	});

	if (workplaces.length === 0) {
		return res.status(204).json({
			message: "No workplaces found.",
		});
	}

	res.json(workplaces);
};

const createNewWorkplace = async (req, res) => {
	if (!req.body.workplaceName || !req.body.workplaceIcon || !req.body.userID) {
		return res.status(400).json({
			message:
				"Bad Request: workplaceNam && workplaceIcon && userID are required!",
		});
	}

	const { workplaceName, workplaceIcon, userID } = req.body;

	const isWorkplaceExist = await Workplace.findOne({
		workplaceName: workplaceName,
	}).exec();

	if (isWorkplaceExist) {
		return res.sendStatus(409);
	}

	try {
		const result = await Workplace.create({
			workplaceName: workplaceName,
			workplaceIcon: workplaceIcon,
			userID: userID,
		});

		res.status(201).json(result);
	} catch (err) {
		console.error(err);
	}
};

const updateWorkplaceByID = async (req, res) => {
	if (!req.query.workplaceID) {
		return res.status(400).json({
			message: "Bad Request: params|workplaceID is required! ",
		});
	}

	if (!req.body.workplaceName || !req.body.workplaceIcon) {
		return res.status(400).json({
			message:
				"Bad Request: params|workplaceName && workplaceIcon are required! ",
		});
	}

	const workplaceID = req.query.workplaceID;
	const { workplaceName, workplaceIcon } = req.body;

	const targetWorkplace = await Workplace.findById({
		_id: workplaceID,
	}).exec();

	if (!targetWorkplace) {
		return res.status(204);
	}

	targetWorkplace.workplaceName = workplaceName;
	targetWorkplace.workplaceIcon = workplaceIcon;

	const result = await targetWorkplace.save();
	res.json(result);
};

const deleteWorkplaceByID = async (req, res) => {
	if (!req.query.workplaceID) {
		return res.status(400).json({
			message: "Bad Request: params|workplaceID is required! ",
		});
	}

	const targetWorkplaceID = req.query.workplaceID;

	const result = await Workplace.findOneAndDelete({
		_id: targetWorkplaceID,
	});

	res.json(result);
};

module.exports = {
	getAllWorkplace,
	createNewWorkplace,
	updateWorkplaceByID,
	deleteWorkplaceByID,
};
