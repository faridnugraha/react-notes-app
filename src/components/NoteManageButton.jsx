import { Button } from "react-bootstrap";
import { PropTypes } from 'prop-types'

function NoteManageButton({id, archived, onArchiveToggle, deleteButtonHandler}){
    return(
        <>
            <Button variant={archived?'outline-secondary':'secondary'} className="me-2 rounded-circle pt-2" onClick={(e) => onArchiveToggle(e, id)}>
                <span className="material-symbols-outlined">{archived?"unarchive":"archive"}</span>
            </Button>
            <Button variant="danger" className="rounded-circle pt-2" onClick={(e) => deleteButtonHandler(e, id)}>
                <span className="material-symbols-outlined">delete</span>
            </Button>
        </>
    )
}

NoteManageButton.propTypes = {
    id: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired,
    deleteButtonHandler: PropTypes.func.isRequired,
    onArchiveToggle: PropTypes.func.isRequired,
}

export default NoteManageButton