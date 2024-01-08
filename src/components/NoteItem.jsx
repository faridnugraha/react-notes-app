import React from "react";
import { Col, Card } from "react-bootstrap"
import NoteManageButton from "./NoteManageButton";
import { PropTypes } from 'prop-types'

class NoteItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            showNoteModal: false
        }

        this.deleteButtonHandler = this.deleteButtonHandler.bind(this)
    }

    deleteButtonHandler(ev){
        // ev.stopPropagation()
        this.props.onDelete(this.props.id)
    }

    render(){
        const dateFormated = new Date(this.props.createdAt).toDateString()
        return(
            <>
                <Col xs={12} sm={12} md={6} lg={4} xl={3}>
                    <Card className="note-item">
                        <Card.Body className="pb-0">
                            <Card.Title className="note-item__title">{this.props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{dateFormated}</Card.Subtitle>
                            <Card.Text style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                lineClamp: 6,
                                WebkitLineClamp: 6,
                                WebkitBoxOrient: "vertical",
                            }}>
                                {this.props.body}
                            </Card.Text>
                        </Card.Body>
                        <div className="d-flex justify-content-end me-3 my-3">
                            <NoteManageButton id={this.props.id} archived={this.props.archived} onArchiveToggle={this.props.onArchiveToggle} deleteButtonHandler={this.deleteButtonHandler}/>
                        </div>
                    </Card>
                </Col>
            </>
        )
    }
}

NoteItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    onArchiveToggle: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NoteItem;