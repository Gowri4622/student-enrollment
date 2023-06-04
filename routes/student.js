const express = require('express')
const router = express.Router();
const studentModel = require('../models/student')
const {getAllStudents, addStudent, updateStudent, deleteStudent, getStudent, getStudentByID} = require('../controllers/student')


router.route('/').get(getAllStudents).post(addStudent)

router.route('/:id').get(getStudent, getStudentByID).patch(getStudent, updateStudent).delete(getStudent, deleteStudent);

module.exports = router