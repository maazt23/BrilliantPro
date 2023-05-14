import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";

function LearnerDashboard(props) {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        const url = process.env.REACT_APP_API_URL + "/users/courses/" + props.user.userId;
        axios.get(url)
        .then(response => {
            setCourses(response.data.data)
        })
        .catch(error => {
            alert(error);
        });     
    },[])

    return (
        <div> 
            <div>
               <h1> ENROLLED COURSES </h1>
            </div>
            {
                courses.map((course,index)=>{
                    return(
                        <div>
                           {index+1}:- <Link to={`/learnercourse/${course.courseId._id}`}>{course.courseId.title}</Link> 
                           &nbsp; &nbsp; &nbsp; &nbsp;
                           {course.progress}
                           &nbsp; &nbsp; &nbsp; &nbsp;
                           {course.status}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default LearnerDashboard;
