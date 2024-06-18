import React from 'react'
import PropTypes from 'prop-types'

import Header from '../utils/Header'
import Footer from '../utils/Footer'
import '../style/style.css'
import '../style/responsive.css'
import '../style/bootstrap.css'

const Layout = ({ Page }) => {
    return (
        <div>
            <Header />
            <Page />
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    Page: PropTypes.func
}

export default Layout
