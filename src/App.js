import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { FaPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Notes from "./Components/Notes";
import AddNotes from "./Components/AddNotes";

export default function App() {
  const initialState = [
    {
      id: 1,
      title: "health tip",
      note: "drink water regularly"
    },
    {
      id: 2,
      title: "random tip",
      note:
        "Some quick example text to build on the card title and make up the bulk of the cards content."
    },
    {
      id: 3,
      title: "gym",
      note: "bench press 225 pounds"
    }
  ];

  const [notes, addNotes] = useState(initialState);
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);

  function handleModal() {
    setOpen(!isOpen);
  }

  useEffect(() => {
    alanBtn({
      key:
        "811794270532c7ccbd6776a8f5ea9de62e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        addNotes((prevNotes) => {
          const updatedNotes = {
            ...commandData,
            id: prevNotes[prevNotes.length - 1].id + 1
          };
          return prevNotes.concat(updatedNotes);
        });
        console.log("data", notes);
      }
    });
  }, []);

  return (
    <div className="container-fluid">
      <Navbar theme={"light"} setSearch={setSearch} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Notes notes={notes} addNotes={addNotes} search={search} />
      <AddNotes addNotes={addNotes} isOpen={isOpen} setOpen={setOpen} />
      <button
        className="btn btn-primary rounded-circle fixed-bottom"
        style={{
          float: "right",
          left: "1rem",
          bottom: "2.5rem",
          padding: "23 23"
        }}
        onClick={handleModal}
      >
        <FaPlus />
      </button>
    </div>
  );
}
