import React, { Component } from 'react';
// import logo from './logo.svg';
// import styles from './App.css';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.blackbackground}>
          <div className={styles.screen}>
          </div>
          <div className={styles.buttonboard}>
            <div className={styles.buttonzero}>
              <h4>0</h4>
            </div>
            <div className={styles.symbolbutton}>
              <h4>.</h4>
            </div>
            <div className={styles.symbolbutton}>
              <h4>+</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>1</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>2</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>3</h4>
            </div>
            <div className={styles.symbolbutton}>
              <h4>-</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>4</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>5</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>6</h4>
            </div>
            <div className={styles.symbolbutton}>
              <h4>x</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>7</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>8</h4>
            </div>
            <div className={styles.regularbutton}>
              <h4>9</h4>
            </div>
            <div className={styles.symbolbutton}>
              <h4>/</h4>
            </div>
            <div className={styles.acbutton}>
              <h4>AC</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
