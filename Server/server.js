require('dotenv').config();
const express = require('express');
const connectDB = require('./src/db/db');
const cors = require('cors');
const studentRoutes = require('./src/routes/studentRoutes')
const teacherRoutes = require('./src/routes/teacherRoutes')

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);

app.listen(3000, ()=>{ console.log("Server is Running!") });