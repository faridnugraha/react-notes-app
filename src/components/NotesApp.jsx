import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddNotePage from '../pages/AddNotePage';
import NoteDetailPage from '../pages/NoteDetailPage';
// import { getAllNotes, addNote, changeArchivedStatus, deleteNote } from '../utils/notes';
import { getAllNotes, addNote, archiveNote, unarchiveNote, deleteNote } from '../utils/local-data';
import NotFoundPage from '../pages/NotFoundPage';

class ContactApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      notes: getAllNotes()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onChangeArchivedHandler = this.onChangeArchivedHandler.bind(this)
    this.onAddHandler = this.onAddHandler.bind(this)
  }

  onDeleteHandler(id){
    if(confirm('Do you want to delete this note?')){
      deleteNote(id)
      this.setState({notes: getAllNotes()})
    }
  }
  
  onChangeArchivedHandler(id, isArchived){
    if(isArchived){
      unarchiveNote(id)
    }else{
      archiveNote(id)
    }
    this.setState({notes: getAllNotes()})
  }

  onAddHandler(note){
    addNote(note)
    this.setState({notes: getAllNotes()})
  }

  render(){
    return(
      <>
          <Routes>
            <Route path="/" element={<HomePage notes={this.state.notes} deleteHandler={this.onDeleteHandler} archivedHandler={this.onChangeArchivedHandler}/>} />
            <Route path="/note/*" element={<NotFoundPage/>} />
            <Route path="/note/:id" element={<NoteDetailPage archivedHandler={this.onChangeArchivedHandler} deleteHandler={this.onDeleteHandler}/>} />
            <Route path="/note/add" element={<AddNotePage addHandler={this.onAddHandler}/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </>
    )
  }
}

export default ContactApp