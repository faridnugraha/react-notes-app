import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./NotesList"
import { getNotes } from "../utils/notes";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getNotes()
        }
    }

    render(){
        return (
            <div className="notes-app">
                <h1>Notes App</h1>
                <p>make your notes, elevate your works</p>

                <h2>Recent Notes</h2>
                <NoteList notes={this.state.notes}/>

                <h2>Archive Notes</h2>
            </div>
        )
    }
}

export default NotesApp;