import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>Помилка 404</h1>
      <p>{`Такої сторінки не існує 😕`}</p>
    </div>
  )
}
