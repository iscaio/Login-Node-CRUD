const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    const userDB = await UserModel.create({
      nome: user.nome,
      email: user.email,
      password: hashPassword,
    });
    res.status(201).json(userDB);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Senha invalida, tente novamente!" });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1m" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro do servidor, tente novamente!" });
  }
};
