const mongoose = require("mongoose");
const { databaseServer } = require("./utils/config.js.js");

try {
  mongoose.connect(
    "mongodb://heroku_2dmjmp9k:nc7t7j7k095sevo7h38vbiuedc@ds145584.mlab.com:45584/heroku_2dmjmp9k",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );
  console.log("Connected to database!");
} catch (e) {
  console.log("Connection failed!");
}
