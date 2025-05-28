import React from "react";

function ButtonArchiveItem({ id, onArchive, archived }){
    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}> {archived ? "Pindahkan" : "Arsipkan"} </button>
    );
}

export default ButtonArchiveItem;