const express = require('express');
const router = express.Router();
const { RegisterStudent } = require('../controllers/studentController');

router.post("/RegisterStudent", RegisterStudent)


module.exports = router;