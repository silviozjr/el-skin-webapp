import React from 'react';
import styles from './styles.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.NotfoundContainer}>
      <h3>Página não encontrada</h3>
      <p>Você pode usar o campo de busca ou o menu para encontrar o que deseja</p>
    </div>
  )
}

export default NotFound;