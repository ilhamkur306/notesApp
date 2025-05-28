import React from "react";

function NoteInputFormTitleLimit({ remaining }) {
  return <p className="note-input__title__char-limit">Sisa Karakter adalah: {remaining}</p>;
}

export default NoteInputFormTitleLimit;
