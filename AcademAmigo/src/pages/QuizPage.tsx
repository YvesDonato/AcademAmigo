import React from 'react';
import QuizSelection from './QuizSelection';
import { quizzes } from '../data/quizzes';
import '../style/FlashcardPage.css';

const FlashcardPage: React.FC = () => {
  return (
    <div>
      <QuizSelection quizzes={quizzes} />
    </div>
  );
};

export default FlashcardPage;