import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";
import NoteManageButton from "../components/NoteManageButton";
import { getNoteById, changeArchivedStatus, deleteNote } from "../utils/notes";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";

function NoteDetailPageWrapper(){
    const { id } = useParams()
    return <NoteDetailPage id={Number(id)} />
}

class NoteDetailPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            note : getNoteById(this.props.id)
        }
    }
    
    render(){
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                {this.state.note.title}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>{this.state.note.body}</p>
                            </Card.Body>
                            <Card.Footer>
                                <NoteManageButton id={this.state.note.id} archived={this.state.note.archived} onArchiveToggle={changeArchivedStatus} deleteButtonHandler={deleteNote}/>
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