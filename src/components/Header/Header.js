import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <h1 className="header-title">Tazi.ai</h1>
                </Link>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link to="/models" className="nav-link">Models</Link>
                        </li>
                        <li>
                            <Link to="/add" className="nav-link action-btn">Add New Model</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
