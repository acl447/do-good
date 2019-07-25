const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users")

// Post routes
router.use("/posts", postRoutes);
// User routes
router.use("/users", userRoutes);
const commentRoutes = require("./comments");

// Post routes
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
