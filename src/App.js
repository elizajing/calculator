import React, { Component } from 'react';
// import './AppTest.less';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="blackBackground">
          <div className="screen">
            <input type="text" />
          </div>
          <div className="buttonBoard">
            <div className="buttonZero">
              <h4>0</h4>
            </div>
            <div className="symbolButton">
              <h4>.</h4>
            </div>
            <div className="symbolButton">
              <h4>+</h4>
            </div>
            <div className="regularButton">
              <h4>1</h4>
            </div>
            <div className="regularButton">
              <h4>2</h4>
            </div>
            <div className="regularButton">
              <h4>3</h4>
            </div>
            <div className="symbolButton">
              <h4>-</h4>
            </div>
            <div className="regularButton">
              <h4>4</h4>
            </div>
            <div className="regularButton">
              <h4>5</h4>
            </div>
            <div className="regularButton">
              <h4>6</h4>
            </div>
            <div className="symbolButton">
              <h4>x</h4>
            </div>
            <div className="regularButton">
              <h4>7</h4>
            </div>
            <div className="regularButton">
              <h4>8</h4>
            </div>
            <div className="regularButton">
              <h4>9</h4>
            </div>
            <div className="symbolButton">
              <h4>/</h4>
            </div>
            <div className="acButton">
              <h4>AC</h4>
            </div>
            <div className="symbolButton">
              <h4>=</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
