const express = require("express");
const app = express();
const tasks = require("./routes/router");
const connectDB = require("./config/connect");
const port = process.env.PORT || 3000;
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

//Ensuring connection to the db before starting the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server Started on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

//Morizuq :)
start();
