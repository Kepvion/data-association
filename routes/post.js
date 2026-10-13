
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/data-association");

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    trim: true,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
    
  },

  date: {
    type: Date,
    default: Date.now,
  },

  likes: {
    type: Number,
    default: 0,
    min: 0,
  },
});

module.exports = mongoose.model("Post", postSchema);