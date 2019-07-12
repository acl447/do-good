const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dogoodDB"
);

const postSeed = [
  {
    name: "Britney Spears",
    itemToGiveAway: "sequin jumpsuit",
    email: "Britney.spears@bspears.com",
    //date: new Date(Date.now())
  },

  {
    name: "Alex Lion",
    itemToGiveAway: "lawn mower",
    email: "Alex.lion@alion.com",
    //date: new Date(Date.now())
  },

  {
    name: "Hannah Montana",
    itemToGiveAway: "freshly made banana bread",
    email: "Hannah.montana@hmontana.com",
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
