import "./App.css";
import Header from "./components/Header/Header";
import CreateNote from "./components/CreateNote/CreateNote";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import React, { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // console.log("F -- APP>JS notes --", notes);

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
