import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>egonoid React Template</h1>
        <p>Happy Coding!</p>
        <a
          className={styles.link}
          href="https://www.egonoid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.egonoid.com
        </a>
      </header>
    </div>
  );
};

export default App;
