import { useEffect, useMemo, useState } from 'react';
import style from './Navbar.module.scss';
import './Animation.scss';
import classnames from 'classnames';
import Burger from '../burger/Burger';
import { CSSTransition } from 'react-transition-group';
import SVG from 'react-inlinesvg';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [sections, setActiveSection] = useState([
    { name: 'главная', state: false, href: '#home' },
    { name: 'О НАБОРЕ', state: false, href: '#about' },
    { name: 'УПАКОВАТЬ', state: false, href: '#gallery' },
    { name: 'КУПИТЬ', state: false, href: '#buy' }
  ]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

  useEffect(() => {
    delayScrollToSection(sections);
  }, [scroll]);

  const defineSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const actualNavBar = sections.map(({ name, state, href }) => {
          state = false;

          if (href.includes(entry.target.id)) {
            state = true;
          }

          return { name, state, href };
        });

        setActiveSection(actualNavBar);
      }
    });
  };

  const observer = new IntersectionObserver(defineSection, { threshold: 0.7 });

  useEffect(() => {
    setTimeout(() => {
      const sectionsAll = document.querySelectorAll('section');

      sectionsAll.forEach((section) => observer.observe(section));
    }, 800);
  }, []);

  const isTopOfPage = scroll < 5 && document.documentElement.clientWidth < 768;
  const navClass = classnames(isTopOfPage ? style.nav_top : style.mobile_nav);

  const scrollToSection = (href, isMobileMode) => {
    const marginSection = isMobileMode ? 0.1 : 0.1;
    const selectedHref = document.querySelector(href);
    const yStartCoord = selectedHref.offsetTop - window.innerHeight * marginSection;
    window.scroll(0, yStartCoord);
  };

  const delayScrollToSection = (arr) => {
    clearTimeout(window.scrollTimer);
    window.scrollTimer = setTimeout(() => {
      const href = arr.filter(({ state }) => state)[0]?.href || null;
      href ? scrollToSection(href) : '';
    }, 1300);
  };

  return (
    <nav className={navClass}>
      <div className={style.nav_wrapper}>
        <div className={style.nav_logo} onClick={() => scrollToSection('#home')}>
          {isTopOfPage && (
            <SVG
              onClick={() => scrollToSection('#home')}
              className={style.nav_logo_svg}
              src={'/imgs/logo/Darisha_logo_wight.svg'}
            />
          )}
          {!isTopOfPage && (
            <SVG onClick={() => scrollToSection('#home')} src={'/imgs/logo/logo_black.svg'}></SVG>
          )}
        </div>
        <div className={style.nav_ul_wrapper}>
          <ul className={style.nav_ul}>
            {sections.map(({ name, state, href }, index) => {
              return (
                <li className={state ? style.nav_li_active : style.nav_li} key={index}>
                  <a key={href} onClick={() => scrollToSection(href)}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.nav_burger}>
          <Burger active={active} setActive={setActive} isTopOfPage={isTopOfPage} />
        </div>
        <CSSTransition in={active} timeout={300} unmountOnExit mountOnEnter>
          <div className={isTopOfPage ? 'open_nav' : 'open_nav_active'}>
            <ul className="nav_ul">
              {sections.map(({ name, state, href }, index) => {
                return (
                  <li
                    className={state ? 'nav_li_active' : 'nav_li'}
                    key={index}
                    onClick={() => setActive(!active)}>
                    <a key={href} onClick={() => scrollToSection(href, true)}>
                      {name}
                    </a>
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
