import React from "react";
import { Button } from "react-bootstrap";

function NoteManageButton({id, archived, onArchiveToggle, deleteButtonHandler}){
    return(
        <>
            <Button variant="secondary" className="me-2 rounded-circle pt-2" onClick={() => onArchiveToggle(id)}>
                <span className="material-symbols-outlined">{archived?"unarchive":"archive"}</span>
            </Button>
            <Button variant="danger" className="rounded-circle pt-2" onClick={deleteButtonHandler}>
                <span className="material-symbols-outlined">delete</span>
            </Button>
        </>
    )
}

export default NoteManageButton