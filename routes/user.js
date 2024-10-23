const express = require("express");
const router = express.Router();

// router.use(mylogger);  全てに適用する場合

router.get("/", mylogger, (req, res) => {
  res.send("ユーザーです");
});
router.get("/info", (req, res) => {
  res.send("ユーザー情報です");
});

router.get("/:id", (req, res) => {
  res.send(`ユーザーIDは${req.params.id}です`);
});

function mylogger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
