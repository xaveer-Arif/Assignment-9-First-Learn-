import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'
const Teachers = () => {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetch('./TeachersData.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div>
            <div className="teachers-container teacher-bg">
            <Row xs={1} md={4} className="g-4 mt-2 mb-5">
            {
                teachers.map(teacher => <Teacher 
                key = {teacher.id}
                teacher = {teacher}
                ></Teacher>)
            }
            </Row>

                
            </div>
        </div>
    );
};

export default Teachers;