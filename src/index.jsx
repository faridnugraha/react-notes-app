import React from 'react'
import { createRoot } from 'react-dom/client'
import NotesApp from './components/NotesApp'

// const element = <h1>Hello, World!</h1>

import './styles/style.css'
import './styles/header.css'
import './styles/noteApp.css'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <NotesApp/>
    </BrowserRouter>
)