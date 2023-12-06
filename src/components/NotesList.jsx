import React from "react";
import NoteItem from "./NoteItem"

function NotesList({notes, isArchived}){
    const filteredNotes = notes.filter((note) => note.archived === isArchived)
    return (
        <div className="notes-list">
            {
                filteredNotes.map((note) => (
                    <NoteItem key={note.id} id={note.id} {...note}/>
                ))
            }
        </div>
    )
}

export default NotesList;