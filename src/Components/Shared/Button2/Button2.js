import React from 'react'

const styles = {
  default: {

    color: "#fff",
    backgroundColor: "#d1d1d1",
    },
  invisible: {
    display: "none",
  }
}

const Button2 = (props) => {
    const updatedStyles = props.isVisible === true ? styles.default : styles.invisible
    return(
          <button onClick={props.onClick} style={updatedStyles}> {props.text} </button>
       )
 }

export default Button2