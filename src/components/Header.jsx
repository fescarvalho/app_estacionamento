import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.img}>
          <img src="" alt="" />
        </div>
        <div className={styles.links}>
          <Link to="/">Entrada</Link>
          <Link to="/out">Saida/Pagamento</Link>
          <Link to="/historico">Historico</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
