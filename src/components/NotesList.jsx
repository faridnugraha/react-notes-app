import React from "react";
import NoteItem from "./NoteItem"

function NotesList({notes, isArchived, onDelete, onArchiveToggle}){
    const filteredNotes = notes.filter((note) => note.archived === isArchived)
    return (
        <div className="notes-list">
            {
                filteredNotes.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} onArchiveToggle={onArchiveToggle} {...note}/>
                ))
            }
        </div>
    )
}

export default NotesList;