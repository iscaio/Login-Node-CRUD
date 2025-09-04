const UserModel = require("../models/user.model");

exports.allUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, { password: 0 }); 

    res.status(200).json({ Message: "Lista de Usuários", users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
