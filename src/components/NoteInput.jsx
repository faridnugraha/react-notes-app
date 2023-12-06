import React from "react";
import { Button, Form } from "react-bootstrap";

class NoteInput extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
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
    }

    render(){
        return(
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
        )
    }
}

export default NoteInput