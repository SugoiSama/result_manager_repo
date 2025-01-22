import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Exam = new mongoose.model("Exam", examSchema);
export { Exam };
