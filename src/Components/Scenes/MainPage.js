import React from 'react'

import Button from 'Shared/Button/Button';
import Button2 from 'Shared/Button2/Button2'
import Face from 'Shared/Face/Face'


class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        isVisible: false,
        faces: [],
        }
    }

    handleClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    handleNewFace = () => {
    const {faces} = this.state
    const updatedFaces = [...faces, faces.length + 1 ]
    this.setState({
        faces: updatedFaces
    })
    }

    handleRandomPosition = () => {
    const position = {
        x: Math.round( Math.random() * 90),
        y: Math.round( Math.random() * 90)
    }
    return position
    }

    render() {
    const {isVisible} = this.state;
        return(
        <React.Fragment>
            <Button text="Press me" onClick={this.handleClick}/>
            <Button2
                text="and me"
                onClick={this.handleNewFace}
                isVisible={isVisible}
                />
            {this.state.faces.map(item =>
                <Face key={item} position={this.handleRandomPosition()} />
            )
            }
        </React.Fragment>

        )
    }
}

export default MainPage
