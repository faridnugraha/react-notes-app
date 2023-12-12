import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "./NotesList"
import NoteSearch from "./NoteSearch"
import NoteInput from "./NoteInput"
import ToastNotification from "./ToastNotification"
import { getNotes } from "../utils/notes";
import { Container, Tab, Tabs } from "react-bootstrap";

class NotesApp extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getNotes(),
            unfilteredNotes: getNotes(),
            showToast: false,
            toastMsg: ""
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onArchiveToggleHandler2 = this.onArchiveToggleHandler2.bind(this)
        this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this)
        this.toastHandler = this.toastHandler.bind(this)
    }

    toastHandler(show, msg=""){
        this.setState(() => ({showToast: show, toastMsg: msg}))
    }

    onDeleteNoteHandler(id){
        if(confirm("Are you sure want to delete this note?")){
            const notes = this.state.notes.filter(note => note.id !== id)
            const unfilteredNotes = this.state.unfilteredNotes.filter(note => note.id !== id)
            this.setState({notes, unfilteredNotes})
            this.setState(() => ({showToast:true, toastMsg:"Note has been deleted."}))
        }
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
        
        this.setState(() => ({showToast:true, toastMsg:"Note has been added."}))
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
        let archiveStatus = true
        const notes = this.state.notes.map(note => {
            if(note.id === id){
                archiveStatus = !note.archived
                return {...note, archived:archiveStatus}
            }
            return note
        })
        const unfilteredNotes = this.state.unfilteredNotes.map(note => {
            if(note.id === id){
                archiveStatus = !note.archived
                return {...note, archived:archiveStatus}
            }
            return note
        })
        const toastMsg = archiveStatus?"Note has been archive":"Note has been removed from archive"
        this.setState({notes: notes, unfilteredNotes: unfilteredNotes})
        this.setState(() => ({showToast:true, toastMsg:toastMsg}))
    }

    render(){
        return (
            <>
                <Container className="notes-app">
                    <h1 id="app-title">Notes App</h1>
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <NoteSearch onSearch={this.onSearchNoteEventHandler}/>

                    <Tabs defaultActiveKey="recent" id="category-tab" className="my-3" fill>
                        <Tab eventKey="recent" title="Recent">
                            <NoteList notes={this.state.notes} isArchived={false} onDelete={this.onDeleteNoteHandler} onArchiveToggle={this.onArchiveToggleHandler2}/>
                        </Tab>
                        <Tab eventKey="archive" title="Archive">
                            <NoteList notes={this.state.notes} isArchived={true} onDelete={this.onDeleteNoteHandler} onArchiveToggle={this.onArchiveToggleHandler2}/>
                        </Tab>
                    </Tabs>

                </Container>
                <ToastNotification msg={this.state.toastMsg} showToast={this.state.showToast} toastHandler={this.toastHandler}/>
            </>
        )
    }
}

export default NotesApp;