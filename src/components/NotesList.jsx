import React from "react";
import NoteItem from "./NoteItem"

function NotesList({notes, isArchived, onDelete}){
    const filteredNotes = notes.filter((note) => note.archived === isArchived)
    return (
        <div className="notes-list">
            {
                filteredNotes.map((note) => (
                    <NoteItem key={note.id} onDelete={onDelete} {...note}/>
                ))
            }
        </div>
    )
}

export default NotesList;