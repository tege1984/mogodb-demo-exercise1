// import mongoose library
const mongoose = require("mongoose");

// connect to the database
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to mongo-exercises db..."))
  .catch(error =>
    console.error("Could not connect to mongo-exercises db", error)
  );

// create schema
const courseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  __v: Number
});

// creat model
const Course = mongoose.model("Course", courseSchema);

// get the documents
async function getCourses() {
  const course = await Course.find()
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(course);
}

getCourses();
