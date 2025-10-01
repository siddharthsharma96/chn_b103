const jwt = require("jsonwebtoken");

let users = [
  {
    id: 1,
    name: "sid",
    email: "sid@example.com",
    password: 12345,
    role: "admin",
  },
  {
    id: 2,
    name: "rahul",
    email: "rahul@example.com",
    password: 12345,
    role: "user",
  },
];

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
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({
      status: "fail",
      message: "Invalid Email & Password",
    });
  }

  // 3.Generate Token

  const token = signToken(user.id);

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
