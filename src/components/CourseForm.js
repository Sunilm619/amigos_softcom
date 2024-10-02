import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [courses, setCourses] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/courses', { title, description });
            console.log('Course added');

            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding course', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleToggleVisibility = () => {
        if (!isVisible) {
            fetchCourses();
        }
        setIsVisible(!isVisible);
    };

    return (
        <div className="form-container">
            <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Course Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>

            <hr />

            <button onClick={handleToggleVisibility}>
                {isVisible ? 'Hide Courses' : 'Show Courses'}
            </button>

            {isVisible && (
                <div>
                    <h2>Stored Courses</h2>
                    <ul>
                        {courses.map(course => (
                            <li key={course._id}>
                                {course.title}: {course.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CourseForm;
