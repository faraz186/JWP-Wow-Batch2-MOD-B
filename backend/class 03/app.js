import express from "express";
import { productObj } from "./data.js";
import mongoose from "mongoose";
import PostModel from "./model/postSchema.js";

const app = express();
const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://admin:admin@crudapp.ael8koi.mongodb.net/";

mongoose.connect(uri);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//root
app.get("/", (request, response) => {
  response.send("SERVER UP");
});

// post create
app.post("/createpost", async (req, res) => {
  try {
    const { title, desc, userID } = req.body;
    if (!title || !desc || !userID) {
      res.json({
        message: "Required fields are missing!",
      });
      return;
    }
    const obj = {
      title,
      desc,
      userID,
    };
    // create data on db
    const response = await PostModel.create(obj);
    res.json({
      message: "post created",
      data: response,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// get post
app.get("/getpost", async (req, res) => {
  try {
    // const record = await PostModel.find({});
    // const record = await PostModel.find({ title: "POST 100" });
    const record = await PostModel.findById("65e42666019dcfb6eab1ea31");

    res.json({
      message: "GET successfully",
      data: record,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// update post
app.put("/updatepost", async (req, res) => {
  try {
    const { postId, title, desc } = req.body;
    console.log("postId, title, desc", postId, title, desc);
    const response = await PostModel.findByIdAndUpdate(postId, { title, desc });
    res.json({
      message: "successfully updated",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// delete post
app.delete("/deletepost/:id", async (req, res) => {
  try {
    const params = req.params.id;
    await PostModel.findByIdAndDelete(params);
    res.json({
      message: "deleted",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
