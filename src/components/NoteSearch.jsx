import React from "react";
import { Form } from "react-bootstrap";
import { PropTypes } from 'prop-types'

class NoteSearch extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            "keyword": ""
        }

        this.onKeywordEventHandler = this.onKeywordEventHandler.bind(this)
    }

    onKeywordEventHandler(ev){
        this.setState({"keyword": ev.target.value})
        this.props.onSearch(ev.target.value)
    }

    render(){
        return(
            <Form.Control type="text" placeholder="find your note" onChange={this.onKeywordEventHandler}/>
        )
    }
}

NoteSearch.propTypes = {
    // onSearch: PropTypes.func.isRequired
}

export default NoteSearch