import React from "react";
import NoteInputTitleLimit from "./NoteInputFormTitleLimit";

class NoteInputForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitleChars: 50,
        }

        this.onChangeFormInputTitleHandler = this.onChangeFormInputTitleHandler.bind(this);
        this.onChangeFormInputBodyHandler = this.onChangeFormInputBodyHandler.bind(this);
        this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
    }

    onChangeFormInputTitleHandler(event){
        const inputValue = event.target.value;

        const limitedValue = inputValue.slice(0, this.state.maxTitleChars);

        this.setState(() => ({
        title: limitedValue
        }));
    }

    onChangeFormInputBodyHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitFormHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '' });
    }

    render(){
        const remainingChars = this.state.maxTitleChars - this.state.title.length;
        return(
            <div className="note-input">
                <form onSubmit={this.onSubmitFormHandler}>
                    <NoteInputTitleLimit remaining={remainingChars} />
                    <input className="note-input__title" type="text" placeholder="Masukan Nama Judul..." value={this.state.title} onChange={this.onChangeFormInputTitleHandler} maxLength={this.state.maxTitleChars} />
                    <textarea className="note-input__body" type="text" placeholder="Tuliskan Catatan-mu Disini...." value={this.state.body} onChange={this.onChangeFormInputBodyHandler} > </textarea>
                    <button type="submit"> Buat </button>
                </form>
            </div>     
        );
    }
}

export default NoteInputForm;