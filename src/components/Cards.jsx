import React from 'react'
import Navigation from './Navigation'
const Cards = (props) => {
    const style = {
        'display': 'flex',
        'margin': '10px 0px',
        'width': '20rem',
        'padding': '2rem'

}

    return (
        <div className="card text-center bg-dark mx-auto px-5" style={style} >
            <img src={props.image} width="100px" className="align-self-center mt-2 text-light" alt={props.content}></img>
            <div className="card-body">
                <h5 className="card-title text-light">{props.message}</h5>
                <a href={props.path} className="btn btn-outline-light">Ir</a>
            </div>
        </div>
    )
}

export default Cards