import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [students, setStudents] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/faculty', { name, email });

            setName('');
            setEmail('');

            alert('Student added successfully!');
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student.');
        }
    };

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/faculty');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleToggleVisibility = () => {
        if (!isVisible) {
            fetchStudents();
        }
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h1>Faculty Access</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Faculty</button>
            </form>

            <hr />

            <button onClick={handleToggleVisibility}>
                {isVisible ? 'Hide Data' : 'Show Data'}
            </button>

            {isVisible && (
                <div>
                    <h2>Stored Faculty</h2>
                    <ul>
                        {students.map((student) => (
                            <li key={student._id}>
                                {student.name} - {student.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StudentForm;
