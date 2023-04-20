import React from "react";
import "./Note.css";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = ({title,content,id,deleteNote}) => {
  const handleClick = () => {
        deleteNote(id);
  };
  
  return (

    <div className="note">
      <h1>{title}</h1>
      <h1>{content}</h1>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>

  );
};

export default Note;
