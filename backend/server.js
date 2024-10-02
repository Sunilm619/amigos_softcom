const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/faculty', facultyRoutes);

mongoose.connect("mongodb+srv://sunilmanga60:bangbang-23@sunilm19.ne13j3y.mongodb.net/amigosoftcom?retryWrites=true&w=majority&appName=sunilm19"
)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
