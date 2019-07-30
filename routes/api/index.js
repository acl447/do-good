const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
 const zipRoutes = require("./zipcodes");
// const commentRoutes = require("./comments");



// Post routes
router.use("/posts", postRoutes);

// User routes
router.use("/users", userRoutes);

//Zipcodes routes
router.use ("/zipcodes", zipRoutes);

//Comment routes
// router.use("/comments", commentRoutes);

module.exports = router;
