const router = require("express").Router();
const bookRoutes = require("./book");

// User routes

router.use("/books", bookRoutes);

module.exports = router;
