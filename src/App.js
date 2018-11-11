import React, { Component } from 'react';
import './App.css';

import Button from './Components/Shared/Button/Button'
import Button2 from 'Shared/Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Button text='Press me' />
      <Button2 text='And Me' />
      </div>
    );
  }
}

export default App;
