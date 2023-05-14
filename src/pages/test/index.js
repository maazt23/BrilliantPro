import React, { useState, useEffect } from 'react';
import "./.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'Madrid', 'London', 'Berlin'],
      answer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest ocean in the world?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    },
    // add more questions as needed
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(30); // 5 minutes in seconds
  var correctAnswer;
  var incorrects,corrects;
  var grade;
  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextButtonClick = () => {
    // check if the user's answer is correct and update the score if needed
    // move to the next question
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer('');
  };

  const renderQuestion = (question) => {
    return (
      <div key={question.id} className="quiz-question">
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option) => (
            <li key={option} className="quiz-option">
              <button
                onClick={() => handleOptionClick(option)}
                disabled={selectedAnswer !== ''}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={handleNextButtonClick}
          disabled={selectedAnswer === ''}
          className="quiz-next"
        >
          Next
        </button>
      </div>
    );
  };

  const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const score = 0; // calculate the score based on the user's answers

  return (
    <div className="quiz-container">
      <div className="quiz-timer">Time left: {formatTime(timeLeft)}</div>
      {currentQuestion < questions.length && timeLeft>0 ? (
        renderQuestion(questions[currentQuestion])
      ) : (
        <div className="quiz-completed">
          <h2>Quiz Completed!</h2>
          <p>Your attempted correct answers were: {corrects}</p>
          <p>Your attempted incorrect answers were: {incorrects}</p>
          <p>Your Grade in this test is: {grade}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
