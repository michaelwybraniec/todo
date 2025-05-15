import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <img
        src="/icon.png"
        alt="Loading..."
        className={styles.spinner}
      />
    </div>
  );
};

export default Loader;