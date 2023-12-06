import React from "react";
import { Button } from "react-bootstrap";

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
            <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
                <input type="text" placeholder="Insert title..." onChange={this.onTitleChangeEventHandler} />
                <input type="text" placeholder="Insert body..." onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default NoteInput