import React from "react";
import NoteAppHeaderTitle from "./NoteAppHeaderTitle";
import NoteAppHeaderSearch from "./NoteAppHeaderSearch";

function NoteAppHeader({ onSearchChange }) {
  return (
    <div className="note-app__header">
      <NoteAppHeaderTitle />
      <NoteAppHeaderSearch onSearchChange={onSearchChange} />
    </div>
  );
}

export default NoteAppHeader;
