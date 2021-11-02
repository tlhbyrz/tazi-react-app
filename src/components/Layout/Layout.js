import React from 'react'
import {Helmet} from "react-helmet";
import Header from 'components/Header/Header'
import "./Layout.css"

const Layout = ({ title, description, children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title> 
                <meta name="description" content={description} />
            </Helmet>
            
            <Header />
            <div className="container">
                {children}
            </div>
        </>
    )
}


Layout.defaultProps = {
    title: 'Tazi.ai',
    description: 'Build ai models just in minutes',
}

export default Layout
