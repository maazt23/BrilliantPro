import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AssessmentsList() {
  const [assessments, setAssessments] = useState([
    {
      _id: 1,
      name: 'Assessment 1',
      duration: 60,
      passing: 80
    },
    {
      _id: 2,
      name: 'Assessment 2',
      duration: 45,
      passing: 75
    },
    {
      _id: 3,
      name: 'Assessment 3',
      duration: 90,
      passing: 85
    }
  ]
  );

//   useEffect(() => {
//     async function fetchAssessments() {
//       const response = await axios.get('/api/assessments');
//       setAssessments(response.data);
//     }
//     fetchAssessments();
//   }, []);

  return (
    <div>
      <h2>Assessments List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duration</th>
            <th>Passing Criteria</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map(assessment => (
            <tr key={assessment._id}>
              <td>
                <Link to={`/assesments/${assessment._id}`}>{assessment.name}</Link>
              </td>
              <td>{assessment.duration} minutes</td>
              <td>{assessment.passingCriteria}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssessmentsList;
