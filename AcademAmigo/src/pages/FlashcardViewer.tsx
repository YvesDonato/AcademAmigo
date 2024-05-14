import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Subject } from '../types';

const FlashcardViewer: React.FC = () => {
  const [subject, setSubject] = useState<Subject | null>(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const [showDefinition, setShowDefinition] = useState(false);
  type TitleParams =
    {
      title: string;
    }
  let { title } = useParams<TitleParams>();
  let navigate = useNavigate();

  useEffect(() => {
    //console.log("Received title:", title);
    const fetchSubject = async () => {
      try {
        if (!title) {
          throw new Error('Title is undefined');
        }
        title = title.replace(/-/g, ' ');
        const response = await fetch(`http://localhost:3000/api/flashcards/${title}`);
        if (!response.ok) {
          throw new Error('Failed to fetch flashcards');
        }
        const data = await response.json();
        setSubject({
          id: data.id,
          subject: data.subject,
          title: data.title,
          description: data.description,
          flashcards: data.flashcards,
        });
      } catch (error) {
        console.error('Error:', error);
        setSubject(null);
      }
    };

    fetchSubject();
  }, [title]);

  // const flashcard = subject?.flashcards[currentFlashcardIndex];

  // const goToNextFlashcard = () => {
  //   setCurrentFlashcardIndex((index) => (index + 1) % (subject?.flashcards?.length || 0));
  //   setShowDefinition(false);
  // };

  // const goToPreviousFlashcard = () => {
  //   setCurrentFlashcardIndex((index) => index === 0 ? (subject?.flashcards?.length || 0) - 1 : index - 1);
  //   setShowDefinition(false);
  // };

  const flashcardsArray = Object.keys(subject?.flashcards || {});
  const currentTerm = flashcardsArray[currentFlashcardIndex];
  const currentDefinition = subject?.flashcards[currentTerm];

  const handleClick = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div>
      <div className="flex justify-center drop-shadow-md">
        <div className="flex justify-center items-center w-2/6 h-96 m-12 bg-white rounded-lg" onClick={handleClick}>
          <div>
            <h1>{showDefinition ? currentDefinition : currentTerm}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="m-1 p-1 bg-white" onClick={() => setCurrentFlashcardIndex(currentFlashcardIndex > 0 ? currentFlashcardIndex - 1 : flashcardsArray.length - 1)}>Previous</button>
        <button className="m-1 p-1 bg-white" onClick={() => setCurrentFlashcardIndex((currentFlashcardIndex + 1) % flashcardsArray.length)}>Next</button>
        <button className="m-1 p-1 bg-white" onClick={() => navigate('/flashcards')}>Back to Subjects</button>
      </div>
    </div>
  );
};

export default FlashcardViewer;
