const express = require ('express');
const cors = require('cors');
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
//const {readdirSync} = require ('fs');


require('dotenv/config');

const PORT = process.env.PORT;

//Middle wares
app.use(express.json());
app.use(morgan("tiny")); 
app.use(cors());


//routes
//readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
const incomesRouter = require('./routes/transactions');
app.use(`/`, incomesRouter);

//Conection to the database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection is ready 🪐🪐🪐");
  })
  .catch((err) => {
    console.log(err);
  });

//Running the server
const server = () => {
app.listen (5000, () => {
    console.log(`Serever is Running on Port: ${PORT} 🚀🚀🚀`);
})
}

server();