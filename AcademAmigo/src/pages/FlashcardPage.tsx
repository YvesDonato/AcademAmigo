import React, { useEffect, useState } from 'react';
import FlashSelection from './FlashSelection';
import { Subject } from '../types';

const FlashcardPage: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/subjects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSubjects(data.map((sub: any) => ({
          id: sub.id,
          title: sub.title,
          description: sub.description,
        })));
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <FlashSelection subjects={subjects} />
    </div>
  );
};

export default FlashcardPage;
