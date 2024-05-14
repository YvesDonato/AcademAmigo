import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Subject } from '../types';
import {Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'

interface Props {
  subjects: Subject[];
}

const FlashSelection: React.FC<Props> = ({ subjects }) => {
  let navigate = useNavigate();

  if (subjects.length === 0) {
    return <div className="flex justify-center m-6 mt-20"><div className="bg-white p-6 rounded-xl">No subjects available. Please add some subjects.</div></div>;
  }
  const handleSelectSubject = (title: string) => {
    if (title) {
      //console.log(title);
      title = title.replace(/\s/g, '-');
      navigate(`/flashcards/subjects/${encodeURIComponent(title)}`);
    }
  };

  function handleDeleteSubject(id: number): void {
    fetch(`http://localhost:3000/api/flashcards/delete/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log(`Deleted subject with id: ${id}`);
        window.location.reload();
      } else {
        console.error('Failed to delete the subject');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
  return (
    <div className="grid grid-cols-4 gap-10 p-10">
      {subjects.map((subject, index) => (
        <div key={index} className="flex justify-center items-center bg-white rounded-xl">
          <div className="sticky m-6">
            <Button type="primary" shape="round" icon={<DeleteOutlined/>} size='large' onClick={() => handleDeleteSubject(subject.id)}/>
          </div>
          <div className="cursor-pointer m-6 text-center" onClick={() => handleSelectSubject(subject.title)}>
            <h2>{subject.title}</h2>
            <p>{subject.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlashSelection;
