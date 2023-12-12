import React from "react";
import NoteItem from "./NoteItem"
import { Row } from "react-bootstrap";

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
                <h3 className="mt-5">Data Not Found :(</h3>
            </div>
        )
    }
}

export default NotesList;