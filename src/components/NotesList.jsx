import React from "react";
import NoteItem from "./NoteItem"
import { Row } from "react-bootstrap";

function NotesList({notes, isArchived, onDelete, onArchiveToggle}){
    const filteredNotes = notes.filter((note) => note.archived === isArchived)
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
}

export default NotesList;