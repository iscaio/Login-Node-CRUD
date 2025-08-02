const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();

//Routes
router.get("/users", UserController.allUsers);
router.get("/user/:id", UserController.getById);
router.patch("/update-user/:id", UserController.updateUser);
router.delete("/delete-user/:id", UserController.deleteUser);

module.exports = router;
