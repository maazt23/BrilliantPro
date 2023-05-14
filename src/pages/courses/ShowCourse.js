import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';
function ShowCourse() {
  const { id } = useParams();
  
  const [materials, setMaterials] = useState([{name : "dw"}]);
  const [assesments, setAssesments] = useState([]);
  const [course, setCourse] = useState();
  const [allLearners,setAllLearners] = useState([])
  const [showLearners,setShowLearners] = useState([{learnerId:{email : "dummy"}}])

  const [show,setShow] = useState('materials');
  
  const [selectedOption, setSelectedOption] = useState('');

  const data = [
    ["Task", "Hours per Day"],
    ["Enrolled", 78],
    ["Failed", 7],
    ["Started", 2],
    ["Halfway", 2],
    ["Passed", 2]
  ];

  const handleAdd = () => {
    const data = {
        "learnerId" : selectedOption,
        "courseId" : id
    }
    const url = process.env.REACT_APP_API_URL + "/enroll/add";
    // console.log(url);
    axios.post(url,data).then((resp)=>{
      alert(resp.data.Message)
    })
  };
  
  useEffect(()=>{


    var url = process.env.REACT_APP_API_URL + "/courses/" + id;
    console.log(url);
    axios.get(url).then((resp)=>{
        console.log("resp",resp);
      setMaterials(resp.data.data[0].materials);
      setAssesments(resp.data.data[0].assesments);
      setCourse(resp.data.data[0]);
    })


  },[])

  useEffect(()=>{
    var url = process.env.REACT_APP_API_URL + "/enroll/" + id;
    axios.get(url).then((resp)=>{
        setShowLearners(resp.data.data)
        console.log("asdf",showLearners);
    })

    url = process.env.REACT_APP_API_URL + "/users";
    axios.get(url).then((resp)=>{
        const learnerRoles = resp.data.data.filter(user => {
            // Check if user is not in learners array
            if (!showLearners.some(learner => learner.learnerId._id === user._id)) {
              if (user.role === 'learner') {
                return true;
              }
            }
            return false;
          });
        setAllLearners(learnerRoles)
        // console.log("sdrgf",learnerRoles);
    })

  },[])
                                                                                                                                                                            
  return (
    <div>
        <h2>Summary</h2>
        <Chart
            chartType="PieChart"
            data={data}
            // options={options}
            width={"100%"}
            height={"400px"}
        />
        
        <div style={{display : 'flex' , justifyContent: 'center',width : '100%',backgroundColor : "Green"}}>
            
            
            <div style={{padding : '10px'}}>
                <button onClick={()=>{setShow('materials')}}>
                    Materials
                </button>   
            </div>

            <div style={{padding : '10px'}}>
                <button onClick={()=>{setShow('assesments')}}>
                    Assesments
                </button>   
            </div>

            <div style={{padding : '10px'}}>
                <button onClick={()=>{setShow('settings')}}>
                    Settings
                </button>   
            </div>
            
            <div style={{padding : '10px'}}>
                <button onClick={()=>{setShow('users')}}>
                    Users
                </button>   
            </div>
        </div>

        {show === 'materials' && (
            <div>
            <h2>Materials</h2>
            <ul>
                { materials.map((material,index) => (
                   <li key={material._id}>
                     {index+1}:- <Link to={`/materials/${material._id}`}>{material.name}</Link>
                    </li>
                ))}
            </ul>
            </div>
        )}

        {show === 'assesments' && (
             <div>
             <h2>Assesments</h2>
             <ul>
                 { assesments.map((assesment,index) => (
                    <li key={assesment._id}>
                      {index+1}:- <Link to={`/assesments/${assesment._id}`}>{assesment.name}</Link>
                     </li>
                 ))}
             </ul>
             </div>
        )}

        {show === 'settings' && (
            <div>
                <h2>Course Title: {course.title}</h2>
                <p>Course description: {course.description}</p>
                <h3>Instructor: {course.instructor}</h3>
                <h3>Duration: {course.duration} Minutes</h3>
                 
            </div>
        )}

        {show === 'users' && (
            <div>
                <h2>Users {showLearners.length}</h2>
                <br/>
                {                    
                    showLearners.map((learner,index) => {
                        return(
                            <div>
                                <h1>{index+1}:- {learner.learnerId.email}</h1>
                            </div>
                        )
                    })                    
                }

                <h3>Add Learner</h3>
                <div style={{display : "flex"}}>
                    <label>
                        <select value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}}>
                        {allLearners.map((learner) => (
                            <option key={learner._id} value={learner._id}>
                                {learner.email}
                            </option>
                        ))}
                        </select>
                    </label>
                    <button onClick={handleAdd} style={{width:'20%',margin : '10px'}}>Add</button>
                </div>

            </div>
        )}
    </div>
  );
}

export default ShowCourse;


