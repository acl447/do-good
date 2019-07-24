const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dogoodDB"
);

const postSeed = [
  {
    text: "sequin jumpsuit",
    comments: [{
      text: "I want it! --Ally"
    }, {text: "cool! --Ivana"}, {text: "woohoo! --Jill"}]

    //date: new Date(Date.now())
  },

  {

    text: "lawn mower",
    comments: [{
      text: "dibs! --Michael"
    }, {text: "yeah! --Blair"}, {text: "woot! --Ches"}]

    //date: new Date(Date.now())
  },

  {

    text: "freshly made banana bread",
    comments: [{
      text: "cool! --Ally"
    }, {text: "sweet! --Aaron"}, {text: "looks good! --Nik"}]

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


  
