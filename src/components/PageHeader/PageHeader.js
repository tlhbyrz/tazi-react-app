import React from 'react'
import "./PageHeader.css"

const PageHeader = ({title, lineWidth}) => {
    return (
        <section className="page-header">
            <h2>{title}</h2>
            <div className="bottom-line" style={{ width: `${lineWidth}px` || "100px" }} />
        </section>
    )
}

export default PageHeader
