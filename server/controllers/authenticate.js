const db = require("../config/connection");
const { hashSync, compareSync } = require("bcrypt");
const { signToken } = require("../utils/auth");

const register = (req, res) => {
  const { username, email, password, avatar } = req.body;

  if (!username || !email || !password)
    return res.status(400).json("All fields required!");

  const sql = `SELECT * FROM users WHERE email =?`;
  db.query(sql, [email], (err, data) => {
    if (err) return res.status(400).json(err);
    if (data.length) return res.status(400).json("user Already exist!");

    const sql = `INSERT INTO users(username, email, password, avatar) VALUE(?)`;
    const salt = 10;
    const hashed = hashSync(req.body.password, salt);
    const values = [username, email, hashed, avatar];
    db.query(sql, [values], (err, data) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json({ msg: "user Created successfully!", data });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json("All fields required!");

  const sql = `SELECT * FROM users WHERE email=?`;
  db.query(sql, [email], (err, data) => {
    if (err) throw new Error(err);
    if (!data.length) return res.status(400).json("User doesnt exist");

    const validPw = compareSync(req.body.password, data[0].password);
    if (!validPw) return res.status(400).json("Iinvalid credentials");

    const { username, email, avatar } = data[0];
    return res.status(200).json({
      username,
      email,
      avatar,
      token: signToken(data[0]),
    });
  });
};

const me = (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = {
  register,
  login,
  me,
};
