import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./NotesList"
import { getNotes } from "../utils/notes";
import { Container } from "react-bootstrap";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getNotes()
        }
    }

    render(){
        return (
            <Container className="notes-app">
                <h1>Notes App</h1>
                <p>make your notes, elevate your works</p>

                <h2>Recent Notes</h2>
                <NoteList notes={this.state.notes} isArchived={false}/>

                <h2>Archive Notes</h2>
                <NoteList notes={this.state.notes} isArchived={true}/>
            </Container>
        )
    }
}

export default NotesApp;