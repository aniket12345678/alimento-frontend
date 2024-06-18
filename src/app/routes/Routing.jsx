import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Book from '../pages/Book'

import Layout from '../components/Layout'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout Page={Home} />} />
                <Route path='/menu' element={<Layout Page={Menu} />} />
                <Route path='/about' element={<Layout Page={About} />} />
                <Route path='/book' element={<Layout Page={Book} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
