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
              <p>0</p>
            </div>
            <div className={styles.symbolbutton}>
              <p>.</p>
            </div>
            <div className={styles.symbolbutton}>
              <p>+</p>
            </div>
            <div className={styles.regularbutton}>
              <p>1</p>
            </div>
            <div className={styles.regularbutton}>
              <p>2</p>
            </div>
            <div className={styles.regularbutton}>
              <p>3</p>
            </div>
            <div className={styles.symbolbutton}>
              <p>-</p>
            </div>
            <div className={styles.regularbutton}>
              <p>4</p>
            </div>
            <div className={styles.regularbutton}>
              <p>5</p>
            </div>
            <div className={styles.regularbutton}>
              <p>6</p>
            </div>
            <div className={styles.symbolbutton}>
              <p>x</p>
            </div>
            <div className={styles.regularbutton}>
              <p>7</p>
            </div>
            <div className={styles.regularbutton}>
              <p>8</p>
            </div>
            <div className={styles.regularbutton}>
              <p>9</p>
            </div>
            <div className={styles.symbolbutton}>
              <p>/</p>
            </div>
            <div className={styles.acbutton}>
              <p>AC</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
