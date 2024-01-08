import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class NoteHandler extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="mb-3 d-flex align-items-center">
                    <p className="mb-0">
                        make your notes, elevate your works
                    </p>
                    <Link to="/add">
                        <Button variant="primary" onClick={this.handleShow} className="ms-2 pt-2 rounded-circle">
                            <span className="material-symbols-outlined">
                                stylus_note
                            </span>
                        </Button>
                    </Link>
                </div>
            </>
        )
    }
}

export default NoteHandler