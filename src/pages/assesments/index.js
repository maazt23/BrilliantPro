import React, { useState } from 'react';
import axios from 'axios';
function AssessmentCreator() {
    const [questions, setQuestions] = useState([{ text: '', options: [] }]);
    const [assesment,setAssesment] = useState({'name':'','duration' : 0,'passing' : 0});
//   const [options, setOptions] = useState(['']);

  const addQuestion = () => {
    setQuestions([...questions, { text: '', options: [{ text: '', correct: false }] }]);
  };

  const addOption = (questionIndex) => {
    const newOptions = [...questions[questionIndex].options, { text: '', correct: false }];
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newOptions;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    const newOptions = [...questions[questionIndex].options];
    newOptions[optionIndex].text = value;
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newOptions;
    setQuestions(newQuestions);
  };

  const handleCheckboxChange = (event, questionIndex, optionIndex) => {
    const value  = event.target.checked;
    const newOptions = [...questions[questionIndex].options];
    newOptions[optionIndex].correct = value;
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newOptions;
    setQuestions(newQuestions);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
        'title' : assesment.name,
        'description' : assesment.description,
        'duration' : assesment.duration,
        'passing' : assesment.passing,
        'questions' : questions
    }
    console.log(data);
    // send questions and options to the server
    const url = process.env.REACT_APP_API_URL +  "/assesments/add";
        axios.post(url,data).then((resp)=>{
            console.log(resp);
            alert(resp.data.Message)
        })
  };

  return (
    <div>
        <div>
        <label>
        Name
        <input 
            type="text" 
            name="name" 
            placeholder='Name'
            value={assesment.name} 
            onChange={(event) => setAssesment({...assesment,name : event.target.value})} 
        />
        </label>

        <label>
        Description
        <input 
            type="text" 
            name="description" 
            placeholder='description'
            value={assesment.description} 
            onChange={(event) => setAssesment({...assesment,description : event.target.value})} 
        />
        </label>

        <label>
        Duration
        <input 
            type="number" 
            name="duration" 
            placeholder='Duration'
            value={assesment.duration} 
            onChange={(event) => setAssesment({...assesment,duration : event.target.value})} 
        />
        </label>

        <label>
        Passing Critera
        <input 
            type="number" 
            name="passing" 
            placeholder='Passing Critera'
            value={assesment.passing} 
            onChange={(event) => setAssesment({...assesment,passing : event.target.value})} 
        />
        </label>

        </div>

        <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
            <div key={questionIndex}>
            <label>
                Question {questionIndex + 1}:<br />
                <input type="text" name="text" value={question.text} onChange={(event) => handleQuestionChange(event, questionIndex)} />
            </label>
            <br />
            {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                Option {optionIndex + 1}:<br />
                <input type="text" value={option.text} onChange={(event) => handleOptionChange(event, questionIndex, optionIndex)} />
                <input type="checkbox" checked={option.correct} onChange={(event) => handleCheckboxChange(event, questionIndex, optionIndex)} />
                </label>
            ))}
            <br />
            <button type="button" onClick={() => addOption(questionIndex)}>Add Option</button>
            <br />
            </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <br />
        <br />
        <button type="submit">Submit Assessment</button>
        </form>
    </div>
  );
}

export default AssessmentCreator;
