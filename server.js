const express = require("express");
const exphbs = require("express-handlebars");

var app = express();

var PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./controllers/html-routes");
require("./controllers/api-routes");

app.listen(PORT, () => {
    console.log(PORT);
})