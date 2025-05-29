import React from "react";

import { getInitialData, showFormattedDate } from '../../utils/index';
import NoteItemList from "./note-list/NoteItemList";
import NoteInput from "./note-form/NoteInput";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
  }

 onAddNoteHandler = ({ title, body }) =>{
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        }
      ]
    }
  });
 }

 onDeleteHandler = (id) => {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }
 
 onArchiveNoteHandler = (id) => {
  this.setState((prevState) => ({
    notes: prevState.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    ),
  }));
}

       

 render() {
  const { notes } = this.state;
  const searchQuery = this.props.searchQuery || "";

  const filteredActiveNotes = notes.filter(note => 
    !note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredArchivedNotes = notes.filter(note => 
    note.archived && note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
      <div className="note-app__body">
        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        { filteredActiveNotes.length ? 
        <NoteItemList
          notes={filteredActiveNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveNoteHandler}
        /> : 
        <p className="notes-list__empty-message">Tidak ada catatan</p> 
        }
        
        <h2>Arsip</h2>
        { !filteredArchivedNotes.length ? 
        <p className="notes-list__empty-message">Tidak ada catatan</p> : 
        <NoteItemList
          notes={filteredArchivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveNoteHandler}
        /> 
        }
      </div>
    );
  }

}
 
export default NoteAppBody;