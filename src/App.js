import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
import AddNotes from './Components/AddNotes';

export default function App() {
  const initialState = [
    {
      id: 1,
      title: 'health tip',
      note: 'drink water regularly',
    },
    {
      id: 2,
      title: 'random tip',
      note: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      id: 3,
      title: 'gym',
      note: 'bench press 225 pounds',
    },
  ];

  const [notes, addNotes] = useState(initialState);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    alanBtn({
      key: '811794270532c7ccbd6776a8f5ea9de62e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        const updatedNotes = { ...commandData, id: notes.length + 1 };
        addNotes((prevNotes) => prevNotes.concat(updatedNotes));
        console.log('data', commandData);
      },
    });
  }, []);

  return (
    <div className="container-fluid">
      <Navbar theme={'light'} setSearch={setSearch} />
      <br />
      <Notes notes={notes} addNotes={addNotes} search={search} />
      <AddNotes addNotes={addNotes} />
    </div>
  );
}
