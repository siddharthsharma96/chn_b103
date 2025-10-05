const User = require("./../Models/userModel");
const jwt = require("jsonwebtoken");

// let users = [
//   {
//     id: 1,
//     name: "sid",
//     email: "sid@example.com",
//     password: 12345,
//     role: "admin",
//   },
//   {
//     id: 2,
//     name: "rahul",
//     email: "rahul@example.com",
//     password: 12345,
//     role: "user",
//   },
// ];

const signToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_JWT, {
    expiresIn: parseInt(process.env.TOKEN_JWT_EXPIRES),
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // 1.Check Input
  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Please provide email and Password",
    });
  }

  // 2.Check User exist
  const user = await User.findOne({ email }).select("+password");
  // const user = users.find((u) => u.email === email && u.password === password);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Email & Password",
    });
  }

  // 3.Generate Token

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    details: {
      userId: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

exports.singUp = async (req, res) => {
  // const { name, email, password, role } = req.body;
  const newUser = await User.create(req.body);
  // Check user is already exist
  // const existingUser = users.find((u) => u.email === email);
  // if (existingUser) {
  //   return res.status(400).json({
  //     status: "fail",
  //     message: "User already Exists with this email",
  //   });
  // }

  // const newUser = {
  //   id: users.length + 1,
  //   name,
  //   email,
  //   password,
  //   role: role || "user",
  // };
  // users.push(newUser);
  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
};

exports.allUser = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
};
