import React from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.link} to="/">
        {' '}
        Entrada
      </Link>
      <Link className={styles.link} to="/out">
        {' '}
        Saida
      </Link>
    </div>
  );
};

export default Menu;
