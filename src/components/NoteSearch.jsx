import React from "react";
import { Form } from "react-bootstrap";
import { PropTypes } from 'prop-types'

class NoteSearch extends React.Component{
    constructor(props){
        super(props)

        this.onKeywordEventHandler = this.onKeywordEventHandler.bind(this)
    }

    onKeywordEventHandler(ev){
        this.props.keywordHandler(ev.target.value)
    }

    render(){
        return(
            <Form.Control type="text" placeholder="find your note" value={this.props.keyword} onChange={this.onKeywordEventHandler}/>
        )
    }
}

NoteSearch.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordHandler: PropTypes.func.isRequired
}

export default NoteSearch