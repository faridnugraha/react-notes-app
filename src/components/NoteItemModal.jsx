import React from "react";
import { Modal, Button } from "react-bootstrap";

function NoteItemContent({id, title, body, archived, showNoteModal, onArchiveToggle, onDelete, onHide}){
    return(
        <Modal
        show={showNoteModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-content-title-vcenter">
                {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" className="me-2 rounded-circle pt-2" onClick={() => onArchiveToggle(id)}>
                    <span className="material-symbols-outlined">{archived?"unarchive":"archive"}</span>
                </Button>
                <Button variant="danger" className="rounded-circle pt-2" onClick={() => onDelete(id)}>
                    <span className="material-symbols-outlined">delete</span>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NoteItemContent;