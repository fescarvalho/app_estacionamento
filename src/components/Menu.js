import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink className={styles.link} to="/">
        {' '}
        Entrada
      </NavLink>
      <NavLink className={styles.link} to="/out">
        {' '}
        Saida/Pagamento
      </NavLink>
      <NavLink className={styles.link} to="/historico">
        {' '}
        Historico
      </NavLink>
    </div>
  );
};

export default Menu;
