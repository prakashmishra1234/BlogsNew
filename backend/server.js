const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDataBase();

let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running `);
});
