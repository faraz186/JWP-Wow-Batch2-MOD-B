import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/UserSchema.js";
import bcrypt from "bcryptjs";
import cors from "cors";
import jwt from "jsonwebtoken"
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = "mongodb+srv://admin:admin@crudapp.ael8koi.mongodb.net/";

mongoose.connect(uri);

mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

app.get("/", (request, response) => {
  response.json({
    message: "SERVER UP",
  });
});

app.post("/api/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.json({
        message: "required fields are missing!",
        data: null,
        status: false,
      });
      return;
    }

    const emailExist = await UserModel.findOne({ email });
    console.log("emailExist", emailExist);
    if (emailExist !== null) {
      // res.status(400).json({
      //   message: "Email already exist",
      // });
      res.json({
        message: "Email already exist",
        status: false
      });


      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const obj = {
      ...req.body,
      password: hashPassword,
    };
    const response = await UserModel.create(obj);
    console.log("response", response);
    res.json({
      message: "user Successfully SIGNUP!",
      status: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({
        message:
          "required fields are missing!",
        status: false
      });
      return;
    }

    const emailExist = await UserModel.findOne({ email });

    console.log(emailExist, "emailExist");
    if (!emailExist) {
      res.json({
        message: "Invalid email & password",
        status: false
      });
      return;
    }

    const comparePass = await bcrypt.compare(password, emailExist.password);

    if (!comparePass) {
      res.json({
        message: "Invalid email & password",
        status: false
      });
      return;
    }
    const obj = {
      email: emailExist.email,
      _id: emailExist._id,
      firstName: emailExist.firstName,
      lastName: emailExist.lastName,
    }
    const token = jwt.sign(obj, "JAWANPAK")
    res.json({
      message: "successfully login",
      data: emailExist,
      status: true,
      token

    });
  } catch (error) {
    res.json({
      message: error.message,
      status: false

    });
  }
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
