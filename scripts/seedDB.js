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
    imageLink: "https://cdn.shopify.com/s/files/1/0015/8099/0516/products/5e5b8acaed6bd4191bffc4e01c11ef8f_915a8bdc-c6d6-4576-8313-67faf41564ba.jpg?v=1549503121",
    text: "I have 12 pairs of socks to give away that have never been worn! They're adult men's, size medium. Email me if interested! maxinea@gmail.com",
    comments: []

    //date: new Date(Date.now())
  },

  {
    
    title: "Lawn Mower",
    name: "Charlie B.",
    zipcode:"85296",
    imageLink: "https://cdn.aws.toolstation.com/images/141020-UK/800/30543.jpg",
    text: "Einhell 139cc 46cm Petrol Lawnmower GC PM46 lawnmower in great condition. Email me if interested. charlieb@dogood.org ",
    comments: []

    //date: new Date(Date.now())
  },

  {

    title: "Freshly Made Banana Bread",
    name: "Andrea D.",
    zipcode:"85233",
    imageLink: "https://assets.simplyrecipes.com/wp-content/uploads/2014/08/banana-bread-vertical-d-1200.jpg",
    text: "I have 6 loaves of fresh banana bread left over from a bake sale - just made this morning with my own family recipe! Not vegan, not gluten-free. Hurry up before they're gone! Email me!",
    comments: []

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




  
