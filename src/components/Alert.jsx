import React from 'react'

const Alert = (props) => {
  return (
    <div className ={props.type}>
        <span className="sm:inline block">{props.message}</span>
    </div>
  )
}

export default Alert