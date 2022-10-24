import React from 'react';

import styles from './Preloader.module.scss';

export const Preloader: React.FC = () => {

  return (
    <div className={styles.load}>
      <hr/><hr/><hr/><hr/>
    </div>  
  )
}
