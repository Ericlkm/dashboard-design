const { sign, verify } = require("jsonwebtoken");

const signToken = ({ id, username, email, avatar }) => {
  const payload = {
    id,
    username,
    email,
    avatar,
  };
  return sign({ data: payload }, "secret", { expiresIn: "2h" });
};

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith(`Bearer`)) {
    try {
      token = token.split(" ")[1].trim();

      const decode = verify(token, "secret", { maxAge: "2h" });
      console.log(decode);
      req.user = decode.data;
      next();
    } catch (err) {
      console.log(err);
      return res.status(400).json("Invalid token");
    }
  }
  if (!token) return res.status(400).json("no token given");
};

module.exports = {
  signToken,
  protect,
};
