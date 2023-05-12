import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./.css";

function CoursesPage() {
  
  const [courses, setCourses] = useState([]);




  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  const handleEditCourse = (id, updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? updatedCourse : course
    );
    setCourses(updatedCourses);
  };

  useEffect(()=>{
    const url = 'http://182.180.54.158:10201/courses';
    axios.get(url).then((resp)=>{
      setCourses(resp.data.data);
    })
  },[courses])


  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.instructor}</p>
            <p>{course.duration} Hours</p>
            <p>{course.description}</p>
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            <button onClick={() => handleEditCourse(course.id, course)}>Edit</button>
          </li>
        ))}
      </ul>

      <h2>Add Course</h2>
      <button>
        <Link to={'/courses/create'}>Add Course </Link>
      </button>
    </div>
  );
}

export default CoursesPage;
