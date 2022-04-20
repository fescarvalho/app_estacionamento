import React from 'react';
import styles from './Menu.module.css';
import { NavLink } from 'react-router-dom';
import useMedia from '../Hooks/useMedia'

const Menu = () => {
 const mobile = useMedia('(max-width: 40rem)');
 const [mobileMenu, setMobileMenu]= React.useState(false)
 console.log(mobile)

  return (
    <>
    <div className={styles.menu}>
    
    {/*   <NavLink className={styles.link} to="/">
        {' '} 
       Entrada
       {mobile && 'Entrada'}
      </NavLink>
      <NavLink className={styles.link} to="/out">
        {' '}
        Saida/Pagamento
        {mobile && 'Saida/Pagamento'}
      </NavLink>
      <NavLink className={styles.link} to="/historico">
        {' '}
        Historico
        {mobile && 'Historico'}
      </NavLink> */}
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} aria-label="Menu" onClick={()=>setMobileMenu(!mobileMenu)}></button>}
    </div>
    </>
  );
};

export default Menu;
