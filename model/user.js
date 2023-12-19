const express = require("express");
const app = express.Router();

const {
  login,
  signUp,
  resetPassword,
  verfyPassword,
  changePassword,
  findRoute,
  changeProfile,
  logOut,
  User,
  ShowTicket,
  checkOut,
} = require("../Controller/user");

app.post("/ParisAirways/v1/loginPage", login);
app.post("/ParisAirways/v1/singUpPage", signUp);
app.post("/ParisAirways/v1/resetPassword", resetPassword);
app.get("/ParisAirways/v1/verfyToken/:id/:email", verfyPassword);
app.post("/ParisAirways/v1/verfyToken/:email", changePassword);
app.get("/ParisAirways/v1/:from/:to", findRoute);
app.post("/ParisAirways/v1/newprofile/:id", changeProfile);
app.get("/ParisAirways/v1/newprofile/logout", logOut);
app.post("/ParisAirways/v1/ShowTicket", ShowTicket);
app.get("/User", User);
app.post("/ParisAirways/v1/checkoutPage", checkOut);

exports.appRouter = app;
