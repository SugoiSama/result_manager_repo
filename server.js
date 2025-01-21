import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./config/db.js";
import studentRouter from "./routes/student.js";
import subjectRouter from "./routes/subject.js";

const app = express();
app.use(express.json());
app.use("/api/student", studentRouter);
app.use("/api/subject", subjectRouter);
connectDB();

app.listen(3000, () => {
  console.log(`Server Running on Port: ${process.env.PORT}`);
});
