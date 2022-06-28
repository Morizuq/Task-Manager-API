const mongoose = require("mongoose");

//This is the model for our task
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide Name"],
    trim: true,
    maxLength: [20, "Name cannot be more than 20 characters"],
    minlength: [2, "Name cannot be less than 2 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//Morizuq :)
module.exports = mongoose.model("Task", TaskSchema);
