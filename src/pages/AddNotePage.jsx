import React from "react";
import NoteFormInputWrapper from "../components/NoteFormInput";
import { PropTypes } from 'prop-types'

function AddNotePage({addHandler}) {
    return(
        <NoteFormInputWrapper addHandler={addHandler}/>
    )
}

AddNotePage.propTypes = {
    addHandler: PropTypes.func.isRequired
}

export default AddNotePage