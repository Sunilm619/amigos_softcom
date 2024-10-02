const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const course = new Course({ title, description });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error adding course' });
    }
});

router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses' });
    }
});

module.exports = router;
