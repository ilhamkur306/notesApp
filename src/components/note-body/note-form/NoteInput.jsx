import React from "react";
import NoteInputTitle from "./NoteInputTitle";
import NoteInputForm from "./NoteInputForm";


function NoteInput({ addNote }) {
  return (
    <div className="note-input">
      <NoteInputTitle />
      <NoteInputForm addNote={addNote} />
    </div>
  );
}


export default NoteInput;