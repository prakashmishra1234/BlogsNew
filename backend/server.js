const app = require("./app");
const dotenv = require("dotenv");
const connectDataBase = require("./config/database");

//config
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDataBase();

app.listen(process.env.PATH || 8080, () => {
  console.log(`server is running `);
});
