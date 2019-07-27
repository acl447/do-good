const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
// const commentRoutes = require("./comments");



// Post routes
router.use("/posts", postRoutes);

// User routes
router.use("/users", userRoutes);

//Comment routes
// router.use("/comments", commentRoutes);

module.exports = router;
