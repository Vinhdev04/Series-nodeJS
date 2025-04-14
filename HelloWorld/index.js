const express = require("express"); // import express from express
const app = express(); // gọi hàm -> tạo ra 1 app mới với cổng 3000
const port = 3001; // port 3001

// sử dụng pug làm view engine
app.set("views", "./views");
// import pug
app.set("view engine", "pug");

// render ra file index.pug trong thư mục views
app.get("/test", (req, res) => {
    res.render('index.pug', { title: 'Trang HelloWorld', message: 'Hello World' });
});


// tạo router với "/" <-> localhost:3001/
app.get("/", (req, res) => {
    res.send(`
    <h1>Trang chủ</h1>
    &lt;h1&gt;Trang chủ&lt;/h1&gt;
    `); // phản hồi
});

app.get("/products", (req, res) => {
    res.send("<h1>Products</h1>"); // phản hồi
});

app.get("/blog", (req, res) => {
    res.send("<h1>Blogs</h1>"); // phản hồi
});

// chạy server với port 3000
app.listen(port, () => {
    console.log(`Port ${port} is starting... `); // log ra port
    console.log(`http://localhost:${port}`); // log ra địa chỉ localhost
});