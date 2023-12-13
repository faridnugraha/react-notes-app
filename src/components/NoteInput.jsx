import React from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";

class NoteInput extends React.Component{
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
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
   
    onTitleChangeEventHandler(ev){
        // let titleCurrentLength = this.state.titleMaxLength - ev.target.value.length
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
                <div className="mb-3 d-flex align-items-center">
                    <p className="mb-0">
                        make your notes, elevate your works
                    </p>
                    <Button variant="primary" onClick={this.handleShow} className="ms-2 pt-2 rounded-circle">
                        <span className="material-symbols-outlined">
                            stylus_note
                        </span>
                    </Button>
                </div>
                <Offcanvas show={this.state.show} onHide={this.handleClose} placement="end" name="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bolder">Insert Your Note</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
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
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        )
    }
}

export default NoteInput