import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AssessmentsList() {
  const [assessments, setAssessments] = useState([]);


  const handleDelete = (id) => {
    const url = process.env.REACT_APP_API_URL + "/assesments/"+id;
    // console.log(url);
    axios.delete(url).then((resp)=>{
      alert(resp.data.Message)
    })
  };

  useEffect(()=>{
    const url = process.env.REACT_APP_API_URL + "/assesments";
    // console.log(url);
    axios.get(url).then((resp)=>{
      setAssessments(resp.data.data);
    })
  },[assessments])

  return (
    <div>
      <h2>Assessments List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Passing Criteria</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map(assessment => (
            <tr key={assessment._id}>
              <td>
                <Link to={`/assesments/${assessment._id}`}>{assessment.title}</Link>
              </td>
              <td>{assessment.duration} minutes</td>
              <td>{assessment.passing}%</td>
              <button onClick={() => handleDelete(assessment._id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add Assessment</h2>
      <button>
        <Link to={'/assesments/create'}>Add Assessment </Link>
      </button>
    </div>
  );
}

export default AssessmentsList;
