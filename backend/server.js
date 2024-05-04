import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config

const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());

// Database Connection

connectDB();

// API Endpoint

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

//mongodb+srv://masood:masood3288@cluster0.odud1zk.mongodb.net/?
