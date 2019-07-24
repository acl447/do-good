const router = require("express").Router();
const postRoutes = require("./posts");
const commentRoutes = require("./comments");

// Post routes
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
