import React from "react";
import { Button } from "react-bootstrap";
import { PropTypes } from 'prop-types'

function NoteManageButton({id, archived, onArchiveToggle, deleteButtonHandler}){
    return(
        <>
            <Button variant="secondary" className="me-2 rounded-circle pt-2" onClick={() => onArchiveToggle(id)}>
                <span className="material-symbols-outlined">{archived?"unarchive":"archive"}</span>
            </Button>
            <Button variant="danger" className="rounded-circle pt-2" onClick={() => deleteButtonHandler(id)}>
                <span className="material-symbols-outlined">delete</span>
            </Button>
        </>
    )
}

NoteManageButton.propTypes = {
    id: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired,
    deleteButtonHandler: PropTypes.func.isRequired,
    onArchiveToggle: PropTypes.func.isRequired,
}

export default NoteManageButton