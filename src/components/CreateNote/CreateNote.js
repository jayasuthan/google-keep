import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import "./CreateNote.css";
import React, { useState } from "react";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    setIsExpanded(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value,
      };
    });
  };
  
  const submitNote = (event) => {
  event.preventDefault();
  props.addNote(note);
  setNote({ title: "", content: "" });
  setIsExpanded(false);
  };

  return (
    
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            className="create-note input"
            placeholder="Title"
            type="text"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          className="create-note textarea"
          placeholder="Take a note ..."
          onChange={handleChange}
          onClick={expand}
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
