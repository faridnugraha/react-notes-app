import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'

function NoteFormInputWrapper({addHandler}){
    const navigate = useNavigate()

    return(<NoteFormInput navigate={navigate} addHandler={addHandler}/>)
}

class NoteFormInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            titleCounter: 20,
            body: '',
            show: false
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }
   
    onTitleChangeEventHandler(ev){
        const titleCurrentLength = ev.target.value.length
        const titleMaxLength = 20
        if(titleCurrentLength <= titleMaxLength){
            this.setState(()=> ({title: ev.target.value, titleCounter: titleMaxLength - titleCurrentLength}))
        } 
    }

    onBodyChangeEventHandler(ev){
        this.setState(()=> ({body: ev.target.value}))
    }

    onSubmitEventHandler(ev){
        ev.preventDefault()
        this.props.addHandler({
            'title': this.state.title,
            'body': this.state.body
        })
        this.props.navigate('/')
    }

    render(){
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs md={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fw-bold">Add Note</Card.Title>
                                    <Form onSubmit={this.onSubmitEventHandler}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bolder">Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter title" maxLength={20} onChange={this.onTitleChangeEventHandler} required/>
                                            <Form.Text className="text-muted">
                                                character limit: {this.state.titleCounter}
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bolder">Body</Form.Label>
                                            <Form.Control id="note-input__body" type="text" as="textarea" placeholder="Enter body" onChange={this.onBodyChangeEventHandler} required/>
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

NoteFormInputWrapper.propTypes = {
    addHandler: PropTypes.func.isRequired
}

NoteFormInput.propTypes = {
    addHandler: PropTypes.func.isRequired
}

export default NoteFormInputWrapper