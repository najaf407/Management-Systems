const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Class: { type: String, required: true },
    RollNo: { type: String, required: true },
    Password: { type: String, required: true },
})

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;