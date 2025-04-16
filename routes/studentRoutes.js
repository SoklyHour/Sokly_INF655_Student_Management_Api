const express = require('express');
const router = express.Router();
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');

// Base route: /students

// GET all students
router.get('/', getAllStudents);

// GET a single student by ID
router.get('/:id', getStudentById);

// POST a new student
router.post('/', createStudent);

// PUT update a student by ID
router.put('/:id', updateStudent);

// DELETE a student by ID
router.delete('/:id', deleteStudent);

module.exports = router;
