import React from 'react'

import Button from 'Shared/Button/Button';
import Button2 from 'Shared/Button2/Button2'


class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        isVisible: false
        }
    }

    handleClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
    const {isVisible} = this.state;
        return(
        <React.Fragment>
            <Button text="Press me" onClick={this.handleClick}/>
            <Button2
                text="and me"
                onClick={() => console.log('elo')}
                isVisible={isVisible}
                />
        </React.Fragment>

        )
    }
}

export default MainPage
