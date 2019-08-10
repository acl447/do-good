const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the posts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dogoodDB"
);

const postSeed = [
  {
    title: "Socks",
    name: "Maxine A.",
    zipcode:"85234",
    text: "I have 12 pairs of socks to give away that have never been worn! They're white, adult men's, size medium. Email me if interested!",
    comments: [{author: "Ally"}, {message: "I want those socks! Email me! allyl@dogood.org"}]

    //date: new Date(Date.now())
  },

  {
    
    title: "Lawn Mower",
    name: "Charlie B.",
    zipcode:"85296",
    text: "PowerSmart DB2194P 21 3-in-1 160cc Gas Push Lawn Mower in great condition. Black and red. Email me if interested. ",
    comments: [{author: "Brian"}, {message: "I want it! Email me! brianl@dogood.org"}]

    //date: new Date(Date.now())
  },

  {

    title: "Freshly Made Banana Bread",
    name: "Andrea D.",
    zipcode:"85233",
    text: "I have 6 loaves of fresh banana bread left over from a bake sale - just made this morning with my own family recipe! Not vegan, not gluten-free. Hurry up before they're gone! Email me!",
    comments: [{author: "Gina"}, {message: "I want that banana bread! Email me! ginal@dogood.org"}]

    //date: new Date(Date.now())
  }
];

// const commentSeed = [
//   {
//     text: "What size??",
//     username: "Jasmine M."
    

    //date: new Date(Date.now())
  // },

  // {

    // text: "Is this still available? Email me! chantal@chantal.com",
    // username: "Chantal C."


    //date: new Date(Date.now())
  // },

  // {

    // text: "Sweet! Is this still available?",
    // username: "Oscar K."
   

    //date: new Date(Date.now())
//   }
// ];

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

  // db.Comment
  // .remove({})
  // .then(() => db.Comment.collection.insertMany(commentSeed))
  // .then(data => {
  //   console.log(data.result.n + " records inserted!");
  //   process.exit(0);
  // })
  // .catch(err => {
  //   console.error(err);
  //   process.exit(1);
  // });


  
