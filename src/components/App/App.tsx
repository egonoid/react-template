import React from 'react';

import { StateProvider } from '../../state';
import Splash from '../Splash';

import styles from './App.module.scss';

const App = () => {
  return (
    <StateProvider>
      <div className={styles.app}>
        <Splash
          title="egonoid React Template"
          claim="Happy Coding!"
          website="https://www.egonoid.com"
        />
      </div>
    </StateProvider>
  );
};

export default App;
