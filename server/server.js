const express = require("express");
const PORT = 3000;
const cors = require("cors");
const db = require("./config/connection");
const multer = require("multer");
const app = express();
const routes = require("./routes");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/avatar", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});
app.post("/image", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});

function startServer() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(routes);

  app.listen(PORT, () => {
    db.connect();
    console.log(`server started on PORT ${PORT}`);
  });
}

startServer();
