import React, { Component } from 'react';
import logo from './logo.svg';
// import TextBox from './containers/textbox'
// import NumberContainer from './containers/number'
import LeftBoxContainer from './containers/left-box'
import RightBoxContainer from './containers/right-box'
import Confetti from 'react-confetti'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="parag">
          {/*<TextBox />*/}
          <LeftBoxContainer />
          <RightBoxContainer />
          {/*<Confetti />*/}
          {/*<NumberContainer />*/}
        </div>
      </div>
    );
  }
}

export default App;
