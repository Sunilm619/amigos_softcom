const express = require('express');
const Student = require('../models/Student');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const student = new Student({ name, email });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error adding student' });
    }
});

router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
});

module.exports = router;
