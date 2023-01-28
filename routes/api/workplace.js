const express = require("express");
const router = express.Router();
const workplaceController = require("../../controllers/workplaceController.js");

router
	.route("/")
	.get(workplaceController.getAllWorkplace)
	.post(workplaceController.createNewWorkplace)
	.put(workplaceController.updateWorkplaceByID)
	.delete(workplaceController.deleteWorkplaceByID);

module.exports = router;
