const TeacherModel = require('../models/teacher.model');
const bcrypt = require('bcryptjs');

const RegisterTeacher = async (req, res) => {
    try {
          const {email, password} = req.body; 

          let ifTeacherExist = await TeacherModel.findOne({ email });
          if (ifTeacherExist) {
              return res.status(409).json({ message: "! Teacher already Registered with this email" })
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          const Teacher = await TeacherModel.create({
            id : Date.now.toString(),
            email : email,
            password : hashedPassword
          })

          res.status(201).json({ message : "Teacher Registed" })

    } catch (error) {
        console.log("error :", error)
    }
}

module.exports = { RegisterTeacher };