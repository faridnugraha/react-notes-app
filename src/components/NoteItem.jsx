import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap"

function NoteItem({id, title, body, archived, onDelete, onArchiveToggle}){
    return(
        <Col xs lg={3}>
            <Card style={{ width: '18rem' }} id="note-item">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text>{body}</Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                    <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
                    <Button variant="primary" onClick={() => onArchiveToggle(id)}>
                        {archived?"Remove":"Archive"}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default NoteItem;