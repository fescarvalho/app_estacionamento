import React from 'react';
import styles from './Menu.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import useMedia from '../Hooks/useMedia'

const Menu = () => {
 const mobile = useMedia('(max-width: 40rem)');
 const [mobileMenu, setMobileMenu]= React.useState(false)
  
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
    {mobile && <div className={styles.menuMobile}>
{mobile &&  <button className={`${styles.mobileButton}  ${mobileMenu && styles.mobileButtonActive}`} aria-label="Menu" onClick={()=>setMobileMenu(!mobileMenu)}></button>}
</div>}

  <nav className={`${mobile ? styles.navMobile : styles.menu} ${mobileMenu && styles.navMobileActive}`}>
      
      <NavLink className={styles.link} end to="/">

       Entrada

      </NavLink>
      <NavLink className={styles.link} to="/out">
    
        Saida/Pagamento

      </NavLink>
      <NavLink className={styles.link} to="/historico">
        Historico
      
      </NavLink> 
    </nav>


    
   
    </>
  );
};

export default Menu;
