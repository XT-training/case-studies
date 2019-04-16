import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import database from './config/database';

import users from "./routes/users";
import invoices from "./routes/invoices";

import { verify, decode } from "./utils/jwt";

import { PORT } from "./config";

const app = express();


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

database.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  next();
});

app.use("/api/user", users);

app.use('/api/user/:userId/invoice', validateUser, invoices);

function validateUser(req, res, next) {
  const isValid = verify(req.headers["x-access-token"]);
  if (!isValid) {
    res.json({ status: "error", message: 'Invalid user', data: null });
  } else {
    const userId = decode(req.headers["x-access-token"]);
    req.body.userId = userId;
    next();
  }
}

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something looks wrong :( !!!" });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
