const express = require("express");
const app = express();
const cors = require("cors");

//Handle cors
app.use(cors());

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(express.json());

//Route Imports
const posts = require("./routes/postRoute");

app.use("/api/v1", posts);

module.exports = app;
