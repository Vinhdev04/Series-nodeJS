const express = require("express");
// tạo ra router và gàn vào biến router
const router = express.Router();
// export routes
router.get("/", (req, res) => {
    res.render("client/pages/products/index.pug");
});
router.get("/create", (req, res) => {
    res.render("client/pages/products/index.pug");
});
router.get("/edit", (req, res) => {
    res.render("client/pages/products/index.pug");
});
router.get("/delete", (req, res) => {
    res.render("client/pages/products/index.pug");
});

// export routes
module.exports = router;