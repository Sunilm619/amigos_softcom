import React from 'react';
import StudentForm from './components/StudentForm';
import CourseForm from './components/CourseForm';
import FacultyForm from './components/FacultyForm';

const App = () => {
  return (
    <div className="app-container">
      <h1>College Management System</h1>
      <div className="form-section">
        <StudentForm />
        <CourseForm />
        <FacultyForm />
      </div>
    </div>
  );
};

export default App;
