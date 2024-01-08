import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "../components/NotesList"
import NoteSearch from "../components/NoteSearch"
import NoteHeader from "../components/NoteHeader"
import ToastNotification from "../components/ToastNotification"
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import { PropTypes } from 'prop-types'

class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            showToast: false,
            toastMsg: ""
        }

        this.toastHandler = this.toastHandler.bind(this)
    }

    toastHandler(show, msg=""){
        this.setState(() => ({showToast: show, toastMsg: msg}))
    }

    render(){
        return (
            <>
                <header>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1 id="app-title">Notes App</h1>
                                <NoteHeader/>
                                <NoteSearch onSearch={this.onSearchNoteEventHandler}/>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Container className="notes-app">
                    <Tabs variant="pills" defaultActiveKey="recent" id="category-tab" className="mt-4 mb-3 mx-auto tabs-custom" fill>
                        <Tab eventKey="recent" title="Recent">
                            <NoteList notes={this.props.notes} isArchived={false} onDelete={this.props.deleteHandler} onArchiveToggle={this.props.archivedHandler}/>
                        </Tab>
                        <Tab eventKey="archive" title="Archive">
                            <NoteList notes={this.props.notes} isArchived={true} onDelete={this.props.deleteHandler} onArchiveToggle={this.props.archivedHandler}/>
                        </Tab>
                    </Tabs>
                </Container>
                <ToastNotification msg={this.state.toastMsg} showToast={this.state.showToast} toastHandler={this.toastHandler}/>
            </>
        )
    }
}

HomePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteHandler : PropTypes.func.isRequired,
    archivedHandler : PropTypes.func.isRequired
}

export default HomePage;