import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./.css";
import CourseCard from "../courseCard";

function CoursesPage() {
  
  const [courses, setCourses] = useState([]);






  // const handleEditCourse = (id, updatedCourse) => {
  //   // const updatedCourses = courses.map((course) =>
  //   //   course.id === id ? updatedCourse : course
  //   // );
  //   // setCourses(updatedCourses);
  // };

  useEffect(()=>{
    const url = process.env.REACT_APP_API_URL + "/courses";
    console.log(url);
    axios.get(url).then((resp)=>{
      setCourses(resp.data.data);
    })
  },[courses])


  return (
    <div>

      <h2>Add Course</h2>
      <button>
        <Link to={'/courses/create'}>Add Course </Link>
      </button>

    
      <h1>Courses</h1>
      <div style={{display : 'flex' , flexWrap: 'wrap',justifyContent: 'center',padding:'20px'}}>
          {courses.map((course) => (
             <div style={{flex: '1 1 160px',margin : '10px'}}>
                <CourseCard course={course}/>
              </div>
          ))}

      </div>


    </div>
  );
}

export default CoursesPage;


