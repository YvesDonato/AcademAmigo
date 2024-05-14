import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FlashcardPage from './pages/FlashcardPage';
// import StudyPage from './pages/StudyPage';
import QuizPage from './pages/QuizPage';
import QuizViewer from './pages/QuizViewer';
import QuizResult from './pages/QuizResult';
import FlashcardViewer from './pages/FlashcardViewer';
import Generation from './pages/Generation.tsx';
import './style/index.css';
import SplineBackground from './components/frontpage/SplineBackground.tsx'

const App: React.FC = () => {

  return (
    <>
    <SplineBackground></SplineBackground>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/quizzes/:subject" element={<QuizViewer />} />
        <Route path="/quiz/result/:subject" element={<QuizResult />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path="/flashcards/subjects/:title" element={<FlashcardViewer />} />
        <Route path="/generation" element={<Generation />} />

        {/* <Route path="/studyplan" element={<StudyPlan />} /> //todo */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </Router>
    </>
  );
};

export default App;
// <Route path="/studyplan" element={<StudyPlan />} /> //todo

