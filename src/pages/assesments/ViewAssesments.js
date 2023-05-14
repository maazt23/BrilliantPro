import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Assessment() {
  const { id } = useParams();
    const a = {
    "title": "Dummy Assessment",
    "questions": [
      {
        "text": "What is the capital of France?",
        "options": [
          { "text": "Paris", "correct": true },
          { "text": "London", "correct": false },
          { "text": "Rome", "correct": false },
          { "text": "Madrid", "correct": false }
        ]
      },
      {
        "text": "What is the largest planet in our solar system?",
        "options": [
          { "text": "Venus", "correct": false },
          { "text": "Jupiter", "correct": true },
          { "text": "Saturn", "correct": false },
          { "text": "Mars", "correct": false }
        ]
      },
      {
        "text": "Who is the author of 'To Kill a Mockingbird'?",
        "options": [
          { "text": "Harper Lee", "correct": true },
          { "text": "Jane Austen", "correct": false },
          { "text": "Charles Dickens", "correct": false },
          { "text": "Mark Twain", "correct": false }
        ]
      }
    ]
    }
    const [assessment, setAssessment] = useState(a);


    useEffect(()=>{
      const url = process.env.REACT_APP_API_URL + "/assesments/" + id;
      console.log(url);
      axios.get(url).then((resp)=>{
        console.log(resp);
        setAssessment(resp.data.data);
      })
    },[])


  return (
    <div>
      <h2>Assessment</h2>
        <div key={assessment._id}>
          <h3>{assessment.title}</h3>
          <h4>{assessment.description}</h4>
          <h5>{assessment.duration} Minutes</h5>
          <h5>{assessment.passing} % Passing Criteria</h5>

          {assessment.questions.map((question,index) => (
            <div key={question._id}>
              <p>Q{index+1}:- {question.text}</p>

              {question.options.map(option => (
                <div key={option._id}>
                  <label style={{ color: option.correct ? 'green' : 'inherit' }}>
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      
    </div>
  );
}

export default Assessment;
