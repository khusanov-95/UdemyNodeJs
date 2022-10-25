const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);
app.use(mainRoutes);

app.listen(3002);