const router = require("express").Router();
const { register, login, me } = require("../../controllers/authenticate");
const { protect } = require("../../utils/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);

module.exports = router;
