import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import usersRouter from "./api/users/index.js";
import defaultErrHandler from "./errHandler/index.js";
import "./db/index.js";

const app = express();
const port = process.env.PORT;

// Use IMAGE environment variable; default to profile-1.jpg if not set
const profileImage = process.env.IMAGE || "profile-1.jpg";

app.use(cors());
app.use(express.json());
app.use("/accounts", usersRouter);

app.get("/", function (req, res) {
  res.sendFile(path.resolve("./index.html"));
});

app.get("/profile-picture", function (req, res) {
  const imgPath = path.resolve(`./images/${profileImage}`);
  if (fs.existsSync(imgPath)) {
    const img = fs.readFileSync(imgPath);
    res.writeHead(200, { "Content-Type": "image/jpg" });
    res.end(img, "binary");
  } else {
    res.status(404).send("Image not found");
  }
});

app.use(defaultErrHandler);

let server = app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
