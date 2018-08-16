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

// creat a model
const Course = mongoose.model("Course", courseSchema);

// get courses
async function getCourses() {
  return await Course.find({ isPublished: true, tags: { $in: ["backend"] } })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}
// display courses
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
