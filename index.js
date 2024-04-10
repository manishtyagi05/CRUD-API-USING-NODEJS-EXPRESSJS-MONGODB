const express = require('express');
const { connectMongoDB} = require("./connection");
const {LogRequestResponse} = require("./middlewares");
const userRouter = require('./routes/user')

const app = express();
 

//connection
connectMongoDB("mongodb://127.0.0.1:27017/CRUD-APP")   
.then(() => console.log("Database connected "))
.catch((err)=> console.log("database connection error", err));


 //middleware plugin
 app.use(express.urlencoded({extended : false}));
 app.use(LogRequestResponse("log.txt"));
 
 //route
 app.use("/api/users", userRouter);



app.listen(8000, () =>{
console.log("Server started at 8000");
});

  
