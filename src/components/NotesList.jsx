import React from "react";
import NoteItem from "./NoteItem"
import { Row } from "react-bootstrap";
import { PropTypes } from 'prop-types'

function NotesList({notes, isArchived, onDelete, onArchiveToggle}){
    const filteredNotes = notes.filter((note) => note.archived === isArchived)
    if(filteredNotes.length > 0){
        return (
            <div className="notes-list">
                <Row>
                    {
                        filteredNotes.map((note) => (
                            <NoteItem key={note.id} onDelete={onDelete} onArchiveToggle={onArchiveToggle} {...note}/>
                        ))
                    }
                </Row>
            </div>
        )
    } else{
        return (
            <div className="text-center">
               <img src="/images/not-found.png" alt="Data Not Found :(" className="img-not-found img-fluid"/>
               <h4>Uh-oh, no notes here!</h4>
               <p className="text-muted">Ready to fill the canvas?</p>
            </div>
        )
    }
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    isArchived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchiveToggle: PropTypes.func.isRequired
}

export default NotesList;