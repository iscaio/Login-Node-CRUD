const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();
//middle???

router.get("/users", UserController.allUsers);
router.get("/users/:id", UserController.getById);
router.patch("/users/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;
