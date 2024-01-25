import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteList from "../components/NotesList"
import NoteSearch from "../components/NoteSearch"
import NoteHeader from "../components/NoteHeader"
import { Container, Tab, Tabs, Row, Col } from "react-bootstrap";
import { PropTypes } from 'prop-types'
import { useSearchParams } from "react-router-dom";

function HomePage({ notes, deleteHandler, archivedHandler }){
    const [searchParams, setSearchParams] = useSearchParams()
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    })

    function onKeywordChangeHandler(keyword){
        setKeyword(keyword)
        setSearchParams({keyword})
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        )
    })

    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 id="app-title">Notes App</h1>
                            <NoteHeader/>
                            <NoteSearch keyword={keyword} keywordHandler={onKeywordChangeHandler}/>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container className="notes-app">
                <Tabs variant="pills" defaultActiveKey="recent" id="category-tab" className="mt-4 mb-3 mx-auto tabs-custom" fill>
                    <Tab eventKey="recent" title="Recent">
                        <NoteList notes={filteredNotes} isArchived={false} onDelete={deleteHandler} onArchiveToggle={archivedHandler}/>
                    </Tab>
                    <Tab eventKey="archive" title="Archive">
                        <NoteList notes={filteredNotes} isArchived={true} onDelete={deleteHandler} onArchiveToggle={archivedHandler}/>
                    </Tab>
                </Tabs>
            </Container>
        </>
    )
}

HomePage.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteHandler : PropTypes.func.isRequired,
    archivedHandler : PropTypes.func.isRequired,
}

export default HomePage;

// function HomePageWrapper({notes, deleteHandler, archivedHandler}){
//     const [searchParams, setSearchParams] = useSearchParams()

//     const keyword = searchParams.get('keyword')

//     function changeSearchParams(keyword){
//         setSearchParams({keyword})
//     }

//     return <HomePage notes={notes} deleteHandler={deleteHandler} archivedHandler={archivedHandler} defaultKeyword={keyword} changeSearchParams={changeSearchParams}/>
// }

// class HomePage extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             keyword: props.defaultKeyword || ''
//         }

//         this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
//     }

//     onKeywordChangeHandler(keyword){
//         this.setState(() => {
//             return {keyword}
//         })

//         this.props.changeSearchParams(keyword)
//     }

//     render(){
//         const notes = this.props.notes.filter((note) => {
//             return note.title.toLowerCase().includes(
//                 this.state.keyword.toLowerCase()
//             )
//         })

//         return (
//             <>
//                 <header>
//                     <Container>
//                         <Row>
//                             <Col md={6}>
//                                 <h1 id="app-title">Notes App</h1>
//                                 <NoteHeader/>
//                                 <NoteSearch keyword={this.state.keyword} keywordHandler={this.onKeywordChangeHandler}/>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </header>
//                 <Container className="notes-app">
//                     <Tabs variant="pills" defaultActiveKey="recent" id="category-tab" className="mt-4 mb-3 mx-auto tabs-custom" fill>
//                         <Tab eventKey="recent" title="Recent">
//                             <NoteList notes={notes} isArchived={false} onDelete={this.props.deleteHandler} onArchiveToggle={this.props.archivedHandler}/>
//                         </Tab>
//                         <Tab eventKey="archive" title="Archive">
//                             <NoteList notes={notes} isArchived={true} onDelete={this.props.deleteHandler} onArchiveToggle={this.props.archivedHandler}/>
//                         </Tab>
//                     </Tabs>
//                 </Container>
//             </>
//         )
//     }
// }

// HomePageWrapper.propTypes = {
//     notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//     deleteHandler : PropTypes.func.isRequired,
//     archivedHandler : PropTypes.func.isRequired
// }

// HomePage.propTypes = {
//     notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//     deleteHandler : PropTypes.func.isRequired,
//     archivedHandler : PropTypes.func.isRequired,
//     defaultKeyword: PropTypes.string,
//     changeSearchParams: PropTypes.func.isRequired
// }

// export default HomePageWrapper;