import React from 'react';
import logo from '../../logo.svg';
import styles from './App.module.scss';
import { StateProvider } from '../../state';

const App = () => {
  return (
    <StateProvider>
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>egonoid React Template</h1>
          <img src={logo} className={styles.logo} alt="logo" />
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
    </StateProvider>
  );
};

export default App;
