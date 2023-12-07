import React from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";

class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
            show: false
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
   
    onTitleChangeEventHandler(ev){
        this.setState(()=> ({title: ev.target.value}))
    }

    onBodyChangeEventHandler(ev){
        this.setState(()=> ({body: ev.target.value}))
    }

    onSubmitEventHandler(ev){
        ev.preventDefault()
        this.props.addNote(this.state)
        this.handleClose()
    }
    handleClose(){
        this.setState(() => ({show: false}))
    }
    handleShow(){
        this.setState(() => ({show: true}))
    }

    render(){
        return(
            <>
                <Button variant="primary" onClick={this.handleShow} className="me-2">
                    +
                </Button>
                <Offcanvas show={this.state.show} onHide={this.handleClose} placement="end" name="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Insert Data</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Form onSubmit={this.onSubmitEventHandler}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={this.onTitleChangeEventHandler} />
                            <Form.Text className="text-muted">
                                Max 30 Letter
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="body">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter body" onChange={this.onBodyChangeEventHandler} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    }
}

export default NoteInput