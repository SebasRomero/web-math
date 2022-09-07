import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <div className="text-center">
                <Link to={props.path} className="btn btn-dark mr-1">{props.name}</Link>
        </div>
    )
}

export default Navigation