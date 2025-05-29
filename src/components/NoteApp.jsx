import React from "react";
import NoteAppHeader from "./note-header/NoteAppHeader";
import NoteAppBody from "./note-body/NoteAppBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  onSearchChangeHandler = (keyword) => {
    this.setState({ searchQuery: keyword });
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearchChange={this.onSearchChangeHandler} />
        <NoteAppBody searchQuery={this.state.searchQuery} />
      </>
    );
  }
}

export default NoteApp;
