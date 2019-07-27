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
    name: ""
    

    //date: new Date(Date.now())
  },

  {

    text: "lawn mower",
    name: ""


    //date: new Date(Date.now())
  },

  {

    text: "freshly made banana bread",
    name: ""
   

    //date: new Date(Date.now())
  }
];

const userSeed = [
  {
    information: {
      firstName: "Britney",
      lastName: "Spears",
      userName: "TheBritt",
      email: "britneyspears@britt.com",
      zip: "54321"
    }
  },

  
  {
    information: {
    firstName: "Michael",
    lastName: "Scott",
    userName: "TheOffice",
    email: "theoffice@scranton.com",
    zip: "54231"
}
},

{
  information: {
  firstName: "Lion",
  lastName: "King",
  userName: "TheSimba",
  email: "hakunamatata@king.com",
  zip: "51234"
}
},

];



  db.User
  .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



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


  
