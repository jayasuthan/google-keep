import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
  const handleClick = () => {
    props.deleteNote(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <h1>{props.content}</h1>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
