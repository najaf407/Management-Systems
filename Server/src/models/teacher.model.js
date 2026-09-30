const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true }
}, { timestamps: true })

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;