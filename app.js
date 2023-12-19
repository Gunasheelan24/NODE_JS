const express = require("express");
const app = express();
const dotEnv = require("dotenv").config({ path: "./config.env" });
const port = process.env.NODE_PORT || 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { appRouter } = require("./model/user");
const { upload } = require("./middleware/File");
require("./Database/connect");

//MiddleWare's
app.use(express.json());
app.use(express.static("./dist"));
app.use(
  cors({
    origin: "https://parisairwaysgunaguna.netlify.app",
    methods: ["GET", "POST"],
  })
);
app.options(
  "https://parisairwaysgunaguna.netlify.app",
  cors({ preflightContinue: true })
);
app.use(upload.single("photo"));
app.use(express.static("./png"));
app.use(cookieParser());

// Router
app.use("/", appRouter);

//Payment MiddleWare For Stripe

//Port Listening

app.listen(port, () => console.log("(❁´◡`❁)"));
