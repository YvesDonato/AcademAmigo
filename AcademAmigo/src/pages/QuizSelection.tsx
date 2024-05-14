import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Quiz } from '../types';
import '../style/QuizPage.css';

interface Props {
  quizzes: Quiz[];
}

const QuizSelection: React.FC<Props> = ({ quizzes }) => {
  let navigate = useNavigate();

  const handleSelectSubject = (subject: string) => {
    navigate(`/quiz/quizzes/${subject}`);
  };

  return (
    <div className="grid-container">
      {quizzes.map((quiz, index) => (
        <div key={index} className="quiz-page" onClick={() => handleSelectSubject(quiz.subject)}>
          <h2>{quiz.subject}</h2>
          <p>{quiz.questions.length} Questions</p>
        </div>
      ))}
    </div>
  );
};

export default QuizSelection;
