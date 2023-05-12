import React, { useState, useEffect } from 'react';


function Assessment() {
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

//   useEffect(() => {
//     async function fetchAssessments() {
//       const response = await axios.get('/api/assessments');
//       setAssessments(response.data);
//     }
//     fetchAssessments();
//   }, []);



  return (
    <div>
      <h2>Assessment</h2>
        <div key={assessment._id}>
          <h3>{assessment.title}</h3>

          {assessment.questions.map(question => (
            <div key={question._id}>
              <p>{question.text}</p>

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
