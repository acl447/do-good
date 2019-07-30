const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true},
  name: { type: String, required: true},
  text: { type: String, required: true },
  zipcode: { type: String, required: true}
  
  
  //date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

/*email: {
  type: String,
  unique: true,
  match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
},*/