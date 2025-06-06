import React from "react"; 

import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} archived={archived} />
    </div>
  );
}


export default NoteItem;
