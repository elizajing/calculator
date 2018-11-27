import React, { Component } from 'react';
// import logo from './logo.svg';
// import styles from './App.css';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.blackBackground}>
          <div className={styles.screen}>
          </div>
          <div className={styles.buttonBoard}>
            <div className={styles.buttonZero}>
              <h4>0</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>.</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>+</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>1</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>2</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>3</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>-</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>4</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>5</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>6</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>x</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>7</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>8</h4>
            </div>
            <div className={styles.regularButton}>
              <h4>9</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>/</h4>
            </div>
            <div className={styles.acButton}>
              <h4>AC</h4>
            </div>
            <div className={styles.symbolButton}>
              <h4>=</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
