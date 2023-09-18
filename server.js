import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRouter from "./routes/user.js"
// environment var
dotenv.config();
const PORT = process.env.PORT || 6060;

// init express
const app = express()

// express initialise
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// app routes
app.use(userRouter);

//listen server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
