import React from 'react';

import './face.scss'

const Face = (props) => {
    const style = {
        position: "absolute",
        border: "1px solid red",
        top: `${props.position.x}vh`,
        left: `${props.position.y}vw`,
    }
    return(
        <div className="face" style={style} >

        </div>
    )
}

export default Face
