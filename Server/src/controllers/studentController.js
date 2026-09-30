const StudentModel = require('../models/student.model')
const bcrypt = require('bcryptjs');

const RegisterStudent = async (req, res) => {
  try {
    const { Name, Class, RollNo, Password } = req.body;

    let IfStudentExist = await StudentModel.findOne({ RollNo });
    if (IfStudentExist) {
      return res.status(409).json({ message: "! Student already Registered with this RollNo" })
    };

    const hashedPassword = await bcrypt.hash(Password, 10);

    const Student = await StudentModel.create({
      Name: Name,
      Class: Class,
      RollNo: RollNo,
      Password: hashedPassword,
    });

    res.status(201).json({ message: "Student Registered" })

  } catch (error) {
    console.log("error :", error);
  }
}

module.exports = { RegisterStudent }