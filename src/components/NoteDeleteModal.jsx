import React from "react";
import { Modal, Button } from "react-bootstrap";

function NoteDeleteModal({id, showDeleteModal, onDelete, onHide}){
    return(
        <Modal
        show={showDeleteModal}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-content-title-vcenter">
                    Delete
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure want to delete this note?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" className="me-2 rounded-circle pt-2" onClick={() => onDelete(id)}>
                    Yes
                </Button>
                <Button variant="secondary" className="rounded-circle pt-2" onClick={onHide(true)}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NoteDeleteModal;