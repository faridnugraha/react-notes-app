import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./NotesList"
import NoteSearch from "./NoteSearch"
import NoteInput from "./NoteInput"
import { getNotes } from "../utils/notes";
import { Container, Tab, Tabs } from "react-bootstrap";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getNotes(),
            unfilteredNotes: getNotes()
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onArchiveToggleHandler2 = this.onArchiveToggleHandler2.bind(this)
        this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this)
    }

    onDeleteNoteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id)
        const unfilteredNotes = this.state.unfilteredNotes.filter(note => note.id !== id)
        this.setState({notes, unfilteredNotes})
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
                    },
                ],
                unfilteredNotes: [
                    ...prevState.unfilteredNotes,
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

    onSearchNoteEventHandler(keyword){
        if(keyword.length !== 0){
            const notes = this.state.unfilteredNotes.filter((note) => note.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
            this.setState({notes})
        } else{
            this.setState({notes: this.state.unfilteredNotes})
        }
    }

    onArchiveToggleHandler2(id){
        const notes = this.state.notes.map(note => {
            if(note.id === id){
                return {...note, archived:!note.archived}
            }
            return note
        })
        const unfilteredNotes = this.state.unfilteredNotes.map(note => {
            if(note.id === id){
                return {...note, archived:!note.archived}
            }
            return note
        })
        this.setState({notes: notes, unfilteredNotes: unfilteredNotes})
    }

    render(){
        return (
            <Container className="notes-app">
                <h1>Notes App</h1>
                <p>make your notes, elevate your works</p>
                <NoteInput addNote={this.onAddNoteHandler}/>
                <NoteSearch onSearch={this.onSearchNoteEventHandler}/>

                <Tabs defaultActiveKey="recent" id="category-tab" className="my-3" fill>
                    <Tab eventKey="recent" title="recent">
                        <NoteList notes={this.state.notes} isArchived={false} onDelete={this.onDeleteNoteHandler} onArchiveToggle={this.onArchiveToggleHandler2}/>
                    </Tab>
                    <Tab eventKey="archive" title="archive">
                        <NoteList notes={this.state.notes} isArchived={true} onDelete={this.onDeleteNoteHandler} onArchiveToggle={this.onArchiveToggleHandler2}/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default NotesApp;