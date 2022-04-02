import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
  return (
    <div className="container-fluid">
      <Navbar theme={'light'} />
      <br />
      <Notes notes={notes} addNotes={addNotes} />
      <AddNotes addNotes={addNotes} />
    </div>
  );
}
