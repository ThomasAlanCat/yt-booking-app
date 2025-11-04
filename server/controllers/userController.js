const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
  try {
    const users = await Users.find();
    if (!users) {
      res.status(400);
      throw new Error("users not found");
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
  res.json({ message: "get ALL users" });
};

const createUser = async (req, res, next) => {
  try {
    const { password, ...rest } = req.body;

    // generate salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await Users.create({
      ...rest,
      password: hashedPassword,
    });
    if (!user) {
      res.status(400);
      throw new Error("user not created");
    }

    // hash password before saving to database

    const { password: userPassword, ...otherDetails } = user._doc;

    return res.status(201).json(otherDetails);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    // todo use joi to validate data
    const { email, password } = req.body;

    //check user from database
    const user = await Users.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }

    // compare password
    const isCorrect = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      res.status(400);
      throw new Error("incorrect password");
    }

    // generate token
    // set cookie
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("jwt", token);

    const { password: userPassword, ...rest } = user._doc;
    return res.status(200).json({ ...rest, token });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  res.cookie("jwt", "", { expiresIn: "-1" });
  return res.json({ message: "you have been logged out" });
};

module.exports = { getUsers, createUser, loginUser, logoutUser };
