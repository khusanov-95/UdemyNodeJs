const http = require("http");

const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("1");
//   next()
// });

// app.use((req, res, next) => {
//   console.log("2"); c 
//   next();
// });

// app.use((req, res, next) => {
//   console.log("3");
//   res.send('<h1>Done</h1>');
// });

app.use("/users", (req, res, next) => {
  res.send('<h1>Users</h1>')
})

app.use("/", (req, res, next) => {
  res.send("<h1>Others</h1>");
});



app.listen(3002);