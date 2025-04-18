const productRoutes = require("./product");
// export routes
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("client/pages/home/index.pug");
    });

    // gọi router
    app.use("/products", productRoutes);
}