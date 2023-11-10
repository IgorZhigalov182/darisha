import { useEffect, useRef, useState } from 'react';
import style from './Navbar.module.scss';
import classnames from 'classnames';
import Burger from '../Burger/Burger';

const Navbar = () => {
  const [sections, setActiveSection] = useState([
    { name: 'главная', state: true },
    { name: 'О НАБОРЕ', state: false },
    { name: 'УПАКОВАТЬ', state: false },
    { name: 'КУПИТЬ', state: false },
  ]);

  const setActiveLi = (e) => {
    const actualNavBar = sections.map(({ name, state }) => {
      state = false;
      if (name.toUpperCase() === e.toUpperCase()) {
        state = true;
      }

      return { name, state };
    });

    setActiveSection(actualNavBar);
  };

  return (
    <nav>
      <div className={style.nav_wrapper}>
        <div className={style.nav_logo}>
          <img alt="logo" src="../public/Darisha_logo-01.jpg" />
        </div>
        <div className={style.nav_ul_wrapper}>
          <ul className={style.nav_ul}>
            {sections.map(({ name, state }, index) => {
              return (
                <li
                  className={state ? style.nav_li_active : style.nav_li}
                  key={index}
                  onClick={(e) => {
                    setActiveLi(e.target.innerText);
                  }}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.nav_burger}>
          <Burger />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
