const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const zipRoutes = require("./zipcodes");




// Post routes
router.use("/posts", postRoutes);

// User routes
router.use("/users", userRoutes);

//Zipcodes routes
router.use ("/zipcodes", zipRoutes);



module.exports = router;
