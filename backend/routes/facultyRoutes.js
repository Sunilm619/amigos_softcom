const express = require('express');
const Faculty = require('../models/Faculty');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const faculty = new Faculty({ name, email });
        await faculty.save();
        res.status(201).json(faculty);
    } catch (error) {
        res.status(500).json({ message: 'Error adding faculty' });
    }
});

router.get('/', async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty' });
    }
});

module.exports = router;
