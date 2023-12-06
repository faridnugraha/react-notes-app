import React from "react";

function NoteItem({id, title, body, archived, createdAt}){
    return(
        <div className="note-item">
            <h5>{title}</h5>
            <p>{body}</p>
            <hr />
        </div>
    )
}

export default NoteItem;