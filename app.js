import express from "express"
import {config} from "dotenv"
import connectDB from "./src/db/connectdb.js"
import bodyParser from "body-parser"
import cors from "cors"
import { User } from "./src/models/appointment.js"
import { Review } from "./src/models/review.js"
const app=express()
config({
    path:"./.env"
})
connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS)
app.use(express.static('public'));
app.use(cors())

// Endpoint to handle form submissions
app.post('/submit-appointment', async (req, res) => {
  const {name,email,phone,date,doctor} = req.body;
  const user=await User.create({
    name,email,phone,date,doctor
  });
  res.send(
    user
  );
});
app.post('/review', async (req, res) => {
    console.log(req.body);
    const {name,email,rating,review} = req.body;
    const rev=await Review.create({
      name,email,rating,review
    });
    console.log(rev);
    res.send(
      rev
    );
  });

  app.get('/get-reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`Port is running on ${process.env.PORT}`)
})