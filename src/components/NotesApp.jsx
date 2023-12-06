import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./NotesList"
import NoteInput from "./NoteInput"
import { getNotes } from "../utils/notes";
import { Container } from "react-bootstrap";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getNotes()
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    }

    onDeleteNoteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        this.setState({notes})
    }

    onAddNoteHandler({title, body}){
        const currentDate = new Date()
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title: title,
                        body: body,
                        archived: false,
                        createdAt: currentDate.toJSON()
                    }
                ]
            }
        })
    }

    render(){
        return (
            <Container className="notes-app">
                <h1>Notes App</h1>
                <p>make your notes, elevate your works</p>
                <NoteInput addNote={this.onAddNoteHandler}/>

                <h2>Recent Notes</h2>
                <NoteList notes={this.state.notes} isArchived={false} onDelete={this.onDeleteNoteHandler}/>

                <h2>Archive Notes</h2>
                <NoteList notes={this.state.notes} isArchived={true} onDelete={this.onDeleteNoteHandler}/>
            </Container>
        )
    }
}

export default NotesApp;