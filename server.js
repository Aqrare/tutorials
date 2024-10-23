const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

// app.use(mylogger);
// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // console.log("Hello node");
  // res.send("<h1>こんにちは、世界！</h1>");
  // res.json({ msg: "エラーです" });
  res.render("index", { title: "タイトル", content: "コンテンツ", text: "ああああ" });
});


// Routing
app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);

// Middleware



app.listen(PORT, () => console.log("サーバー起動"));
