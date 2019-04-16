import bcrypt from "bcrypt";
import userModel from "../models/users";
import { sign } from "../utils/jwt";

export const create = (req, res, next) => {
  userModel.create(
    { name: req.body.name, email: req.body.email, password: req.body.password },
    function(err, result) {
      if (err) next(err);
      else {
        const userInfo = {
          id: result._id,
          name: result.name,
          email: result.email
        };
        const accessToken = sign({ id: userInfo.id });
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: { accessToken, userInfo }
        });
      }
    }
  );
};

export const authenticate = (req, res, next) => {
  userModel.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      next(err);
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const userInfo = {
          id: user._id,
          name: user.name,
          email: user.email
        };
        const accessToken = sign({ id: userInfo.id });
        res.json({
          status: "success",
          data: { accessToken, userInfo }
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: null
        });
      }
    }
  });
};
