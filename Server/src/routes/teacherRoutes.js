const express = require('express');
const router = express.Router();
const { RegisterTeacher } = require('../controllers/teacherController');

router.post('/RegisterTeacher', RegisterTeacher);

module.exports = router;