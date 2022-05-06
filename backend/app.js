const express = require("express");
const app = express();

app.use(express.json());

//Route Imports
const posts = require("./routes/postRoute");

app.use("/api/v1", posts);

module.exports = app;
