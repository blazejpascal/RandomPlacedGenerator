import React from 'react'

import './Button.scss'

const Button = (props) => (
    <button onClick={props.onClick}className="button"> {props.text} </button>
 )

export default Button
