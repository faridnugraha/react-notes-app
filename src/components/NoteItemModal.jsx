import React from "react";
import { Modal, Button } from "react-bootstrap";
import NoteManageButton from "./NoteManageButton";

function NoteItemContent({id, title, body, archived, showNoteModal, onArchiveToggle, deleteButtonHandler, onHide}){
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
                <NoteManageButton id={id} archived={archived} onArchiveToggle={onArchiveToggle} deleteButtonHandler={deleteButtonHandler}/>
            </Modal.Footer>
        </Modal>
    )
}

export default NoteItemContent;