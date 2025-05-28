import React from "react";  

import ButtonDeleteItem from "./ButtonDeleteItem";
import ButtonArchiveItem from "./ButtonArchiveItem";

function NoteItemAction({ id, onDelete, onArchive, archived }){
    return (
        <div className="note-item__action">
            <ButtonDeleteItem id={id} onDelete={onDelete} />
            <ButtonArchiveItem id={id} onArchive={onArchive} archived={archived} />
        </div>
    );
}

export default NoteItemAction;