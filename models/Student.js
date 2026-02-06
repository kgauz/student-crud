const mongoos = require("mongoose");

const studentSchema = new mongoos.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  course: {
    type: String,
    required: true
  }
});

module.exports = mongoos.model("Student", studentSchema);

