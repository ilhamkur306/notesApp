import React from "react";

function NoteAppHeaderSearch({ onSearchChange }) {
  console.log("Received onSearchChange:", onSearchChange);
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari Catatan..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default NoteAppHeaderSearch;
