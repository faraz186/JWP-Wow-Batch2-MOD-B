import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: String,
  desc: String,
  userID: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("post", schema);
export default PostModel;
