import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddNotePage from '../pages/AddNotePage';
import NoteDetailPage from '../pages/NoteDetailPage';
import { getNotes, addNotes, changeArchivedStatus, deleteNote } from '../utils/notes';

class ContactApp extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      notes: getNotes()
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onChangeArchivedHandler = this.onChangeArchivedHandler.bind(this)
    this.onAddHandler = this.onAddHandler.bind(this)
  }

  onDeleteHandler(id){
    if(confirm('Do you want to delete this note?')){
      deleteNote(id)
      this.setState({notes: getNotes()})
    }
  }
  
  onChangeArchivedHandler(id){
    changeArchivedStatus(id)
    this.setState({notes: getNotes()})
  }

  onAddHandler(note){
    addNotes(note)
    this.setState({notes: getNotes()})
  }

  render(){
    return(
      <>
          <Routes>
            <Route path="/" element={<HomePage notes={this.state.notes} deleteHandler={this.onDeleteHandler} archivedHandler={this.onChangeArchivedHandler}/>} />
            <Route path="/note/:id" element={<NoteDetailPage/>} />
            <Route path="/note/add" element={<AddNotePage addHandler={this.onAddHandler}/>} />
          </Routes>
      </>
    )
  }
}

export default ContactApp