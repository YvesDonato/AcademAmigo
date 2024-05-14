import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Quiz, Option } from '../types';
import { quizzes } from '../data/quizzes';
import '../style/QuizPage.css';

const QuizResults: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const { subject } = useParams<{ subject: string }>();

  useEffect(() => {
    const foundQuiz = quizzes.find(q => q.subject === subject);
    setQuiz(foundQuiz || null);
    const storedOptions = localStorage.getItem('selectedOptions');
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, [subject]);

  useEffect(() => {
    if (quiz) {
      let newScore = 0;
      quiz.questions.forEach((question, index) => {
        if (
          question.options.find(
            option => option.option === selectedOptions[index] && option.correct
          )
        ) {
          newScore++;
        }
      });
      setScore(newScore);
    }
  }, [quiz, selectedOptions]);

  if (!quiz) {
    return <div className="container">Quiz not found</div>;
  }

  return (
    <div className="quiz-results-container">
      <h1 className="result-title">Quiz Results for {subject}</h1>
      <div className="result-score">
        <h2>Your Score: {score}/{quiz.questions.length}</h2>
      </div>
      <div className="quiz-questions">
        {quiz.questions.map((question, index) => (
          <div key={index} className="quiz-question">
            <h3>{question.question}</h3>
            <p className="user-answer" data-label="Your Answer: ">
              {selectedOptions[index] || 'Not answered'}
            </p>
            <p className="correct-answer" data-label="Correct Answer: ">
              {question.options.find(option => option.correct)?.option}
            </p>
            <p className={selectedOptions[index] ===
              question.options.find(option => option.correct)?.option ?
              'answer-status correct' : 'answer-status wrong'}>
              {selectedOptions[index] ===
                question.options.find(option => option.correct)?.option ?
                'Correct' : 'Wrong'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizResults;
