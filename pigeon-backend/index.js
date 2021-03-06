const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");
require("./databaseConnection.js");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(indexRouter);
app.use(cors());

app.listen(PORT, () => console.log("Server Started!"));
