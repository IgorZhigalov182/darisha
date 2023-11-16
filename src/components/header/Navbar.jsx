import { useEffect, useState } from 'react';
import style from './Navbar.module.scss';
import './Animation.scss';
import classnames from 'classnames';
import Burger from '../Burger/Burger';
import { CSSTransition, Transition } from 'react-transition-group';
import SVG from 'react-inlinesvg';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(0);
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

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  const isTopOfPage = scroll < 5 && document.documentElement.clientWidth < 768;
  const navClass = classnames(isTopOfPage ? style.nav_top : style.mobile_nav);

  return (
    <nav className={navClass}>
      <div className={style.nav_wrapper}>
        <div className={style.nav_logo}>
          <SVG src="../public/logo.svg"></SVG>
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
                    setActive(!active);
                  }}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.nav_burger}>
          <Burger active={active} setActive={setActive} />
        </div>
        <CSSTransition in={active} timeout={300} unmountOnExit mountOnEnter>
          <div className={isTopOfPage ? 'open_nav' : 'open_nav_active'}>
            <ul className="nav_ul">
              {sections.map(({ name, state }, index) => {
                return (
                  <li
                    className={state ? 'nav_li_active' : 'nav_li'}
                    key={index}
                    onClick={(e) => {
                      setActiveLi(e.target.innerText);
                      setActive(!active);
                    }}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
};

export default Navbar;
