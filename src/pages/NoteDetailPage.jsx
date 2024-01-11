import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import NoteManageButton from "../components/NoteManageButton";
import { getNoteById, changeArchivedStatus, deleteNote } from "../utils/notes";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import BackHomeButton from "../components/BackHomeButton";
import { useNavigate } from 'react-router-dom'


function NoteDetailPageWrapper({archivedHandler, deleteHandler}){
    const { id } = useParams()
    const navigate = useNavigate()
    return <NoteDetailPage navigate={navigate} id={Number(id)} archivedHandler={archivedHandler} deleteHandler={deleteHandler}/>
}

class NoteDetailPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            note : getNoteById(this.props.id)
        }

        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
    }

    onArchiveHandler(){
        this.props.archivedHandler(this.state.note.id)
        this.setState({note: getNoteById(this.props.id)})
    }
    
    onDeleteHandler(){
        this.props.deleteHandler(this.state.note.id)
        this.props.navigate('/')
    }

    render(){
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs md={6}>
                        <BackHomeButton/>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                {this.state.note.title}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>{this.state.note.body}</p>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-end">
                                <NoteManageButton id={this.state.note.id} archived={this.state.note.archived} onArchiveToggle={this.onArchiveHandler} deleteButtonHandler={this.onDeleteHandler}/>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

NoteDetailPage.propTypes = {
    id: PropTypes.number.isRequired
}

export default NoteDetailPageWrapper