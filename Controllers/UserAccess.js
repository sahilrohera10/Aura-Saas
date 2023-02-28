const loginModel = require("../Models/LoginAccess");

const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");

module.exports = {
  Login,
  Register,
};

async function Login(req, res, next) {
  const { Email, Password } = req.body;
  console.log("user Email", Email);
  console.log("user password", Password);
  if (!Email || !Password)
    return res
      .status(400)
      .json({ message: "Please provide Email and password " });
  console.log("still on");

  try {
    const User = await loginModel.findOne({ Email: Email });

    if (!User) {
      console.log("No user exist with this Email.");
      return res.status(401).json({ message: "No user exist with this Email" });
    }
    const pass = await loginModel.findOne({ Email: Email });

    if (!bcrypt.compareSync(Password, pass.Password)) {
      return res.status(402).json({ message: "Password Incorrect" });
    } else {
      return res.status(200).json({ pass });
    }
  } catch (err) {
    console.log("Error in getUsers : ", err);
    return res.status(400).json(err);
  }
}

async function Register(req, res, next) {
  try {
    const user = await loginModel.findOne({ Email: req.body.Email });
    if (user) {
      console.log(" Already registered ");
      return res.status(300).json({ message: "already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const Secpassword = await bcrypt.hash(req.body.Password, salt);

    const data = await loginModel.create({
      Email: req.body.Email,
      Name: req.body.Name,
      Password: Secpassword,
    });
    console.log("data entered :", data);
    res.status(200).json("register done");
    return next();
  } catch (error) {
    console.log("error : ", error);
    return next(error);
  }
}
