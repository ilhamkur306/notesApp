import React from "react";

function NoteAppHeaderSearch({ onSearchChange }) {
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
