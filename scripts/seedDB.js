const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dogoodDB"
);

const postSeed = [
  {
    text: "sequin jumpsuit"

    //date: new Date(Date.now())
  },

  {

    text: "lawn mower"

    //date: new Date(Date.now())
  },

  {

    text: "freshly made banana bread"

    //date: new Date(Date.now())
  }
];





db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
