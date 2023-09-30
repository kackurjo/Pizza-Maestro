import { useState } from 'react';
import Style from './NavBar.module.css';
import { FRONTEND_BASE } from '../../config.json';

export default function Nabar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  const changeUrl = (locaiton: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = FRONTEND_BASE + locaiton;
    }
  }

  return (
    <>
      <div className={Style.bar}>
        <div className={Style.pizzaDiv}>
          <h3>Pizza Maestro</h3>
        </div>
        <div className={Style.burgerDiv} onClick={toggleHamburger}>
          <div className={Style.hamburger} >
            <div className={hamburgerOpen ? Style.openBurger1 : Style.burger1} />
            <div className={hamburgerOpen ? Style.openBurger2 : Style.burger2} />
            <div className={hamburgerOpen ? Style.openBurger3 : Style.burger3} />
          </div>
        </div>
      </div>
      {hamburgerOpen && (
        <ul className={Style.menu}>
          <li className={Style.li} onClick={() => changeUrl('/')}>Home</li>
          <li className={Style.li} onClick={() => changeUrl('/menu')}>Lunch Menu</li>
          <li className={Style.li} onClick={() => changeUrl('/about')}>About us</li>
        </ul>
      )}
    </>
  );
}
