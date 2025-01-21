import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import studentRouter from "./routes/student.js";

const app = express();
app.use(express.json());
app.use("/api/student", studentRouter);
connectDB();

app.listen(3000, () => {
  console.log(`Server Running on Port: ${process.env.PORT}`);
});
