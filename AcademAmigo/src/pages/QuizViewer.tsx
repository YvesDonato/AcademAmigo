import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import { Quiz, Option } from '../types';
import { Button } from 'antd';
import '../style/QuizPage.css';

const QuizViewer: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { subject } = useParams<{ subject: string }>();

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.subject === subject);
    setQuiz(foundQuiz || null);
  }, [subject]);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const { questions } = quiz;

  const handleOptionClick = (option: Option, questionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = option.option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    window.location.href = `/quiz/result/${subject}`;
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index} className="quiz-question">
          <h2>{question.question}</h2>
          {question.options.map((option) => (
            <div
              key={option.option}
              className={`option ${selectedOptions[index] === option.option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option, index)}
            >
              {option.option}
            </div>
          ))}
        </div>
      ))}
      <div className="button-container">
        <Button type="primary" size='large' onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default QuizViewer;

