
const express = require("express")
const {
	CreateUser,
	getAllUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("../controllers/userControllers");
const { validateUser } = require("../middleware/inputValidator");

const router = express.Router()

router.post("/Createuser", validateUser, CreateUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser)

module.exports = router;
