const express = require("express");
const app = express();
const port = 3000;

// import routes
const route = require("./routes/client/index");

// khai báo view
app.set("views", "./view");
app.set("view engine", "pug");

// gọi hàm route
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    
})

