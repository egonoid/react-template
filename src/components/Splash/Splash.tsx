import React from 'react';

import logo from '../../logo.svg';

import styles from './Splash.module.scss';

interface IProps {
  title: string;
  claim?: string;
  website?: string;
  className?: string;
}

const Splash: React.FC<IProps> = ({ title, claim, website, className = '' }) => {
  const websiteWithoutProtocol = website ? website.replace(/^\/\/|^.*?:(\/\/)?/, '') : '';

  return (
    <div className={`${styles.container} ${className}`}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <img src={logo} className={styles.logo} alt="logo" />
        {claim && <p>{claim}</p>}
        {website && (
          <a className={styles.link} href={website} target="_blank" rel="noopener noreferrer">
            {websiteWithoutProtocol}
          </a>
        )}
      </header>
    </div>
  );
};

export default Splash;
