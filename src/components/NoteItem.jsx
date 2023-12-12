import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap"
import NoteItemModal from "./NoteItemModal";

class NoteItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            showNoteModal: false
        }

        this.contentModalHandler = this.contentModalHandler.bind(this)
        this.deleteButtonHandler = this.deleteButtonHandler.bind(this)
    }

    contentModalHandler(show){
        this.setState(() => ({showNoteModal: show}))
    }

    deleteButtonHandler(ev){
        ev.stopPropagation()
        this.props.onDelete(this.props.id)
    }

    render(){
        return(
            <>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Card style={{ width: '18rem' }} id="note-item" onClick={() => this.contentModalHandler(true)}>
                        <Card.Body className="pb-0">
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                lineClamp: 7,
                                WebkitLineClamp: 7,
                                WebkitBoxOrient: "vertical",
                            }}>
                                {this.props.body}
                            </Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content-end me-3 my-3">
                            <Button variant="warning" className="me-2 rounded-circle pt-2" onClick={() => this.props.onArchiveToggle(this.props.id)}>
                                <span className="material-symbols-outlined">{this.props.archived?"unarchive":"archive"}</span>
                            </Button>
                            <Button variant="danger" className="rounded-circle pt-2" onClick={this.deleteButtonHandler}>
                                <span className="material-symbols-outlined">delete</span>
                            </Button>
                        </div>
                    </Card>
                </Col>

                <NoteItemModal 
                    id={this.props.id} 
                    title={this.props.title} 
                    body={this.props.body} 
                    archived={this.props.archived}
                    showNoteModal={this.state.showNoteModal} 
                    onArchiveToggle={this.props.onArchiveToggle}
                    onDelete={this.props.onDelete}
                    onHide={() => this.contentModalHandler(false)}/>
            </>
        )
    }
}


export default NoteItem;