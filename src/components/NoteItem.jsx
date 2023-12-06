import React from "react";
import { Button } from "react-bootstrap"

function NoteItem({id, title, body, createdAt, onDelete, onArchiveToggle}){
    return(
        <div className="note-item">
            <h5>{title}</h5>
            <p>{body}</p>
            <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>{' '}
            <Button variant="primary" onClick={() => onArchiveToggle(id)}>Archive</Button>{' '}
            <hr />
        </div>
    )
}

export default NoteItem;