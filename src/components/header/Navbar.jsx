import { useEffect, useMemo, useState } from 'react';
import style from './Navbar.module.scss';
import './Animation.scss';
import classnames from 'classnames';
import Burger from '../Burger/Burger';
import { CSSTransition } from 'react-transition-group';
import SVG from 'react-inlinesvg';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [sections, setActiveSection] = useState([
    { name: 'главная', state: true, href: '#home' },
    { name: 'О НАБОРЕ', state: false, href: '#about' },
    { name: 'УПАКОВАТЬ', state: false, href: '#gallery' },
    { name: 'КУПИТЬ', state: false, href: '#buy' },
  ]);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));
    return () => window.removeEventListener('scroll', () => setScroll(window.scrollY));
  }, []);

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

  const observer = new IntersectionObserver(defineSection, { threshold: 0.5 });

  useEffect(() => {
    const sectionsAll = document.querySelectorAll('section');

    sectionsAll.forEach((section) => observer.observe(section));
  }, []);

  const isTopOfPage = scroll < 5 && document.documentElement.clientWidth < 768;
  const navClass = classnames(isTopOfPage ? style.nav_top : style.mobile_nav);

  /*
    @params (
      href - id section in DOM: string,
      isMobileMode: bool 
      )
  */
  const scrollToSection = (href, isMobileMode) => {
    const marginSection = isMobileMode ? 0.1 : 0.1;
    const selectedHref = document.querySelector(href);
    const yStartCoord = selectedHref.offsetTop - window.innerHeight * marginSection;
    window.scroll(0, yStartCoord);
  };

  return (
    <nav className={navClass}>
      <div className={style.nav_wrapper}>
        <div className={style.nav_logo}>
          {isTopOfPage && <SVG src={'../../public/Darisha_logo_wight.svg'}></SVG>}
          {/* {isTopOfPage && (
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 93.5 63.8"
              style={{
                enableBackground: 'new 0 0 93.5 63.8',
              }}
              xmlSpace="preserve">
              <style type="text/css">{'\n\t.st0{fill:#0000awF;}\n'}</style>
              <g>
                <path
                  className="st0"
                  d="M38,45.8c0.4,1.2,1.7,2.2,2.9,1.2c0.6-0.6,1-1.5,1.4-2.2c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2 c0,0.1,0,0.1,0,0.2c0.1,1,0.2,3.2,1.5,3.3c1.7,0.2,2.5-2.4,3.1-3.6c0,0.1-0.1,0.2-0.1,0.2c-0.4,0.4-1.1,0.8-1.7,0.6 c-0.9-0.2-0.9-1.2-1-1.9c-0.3-1.3-0.4-2.6-0.3-4c0.1-0.7,0.2-1.5,0.2-2.3c-0.3,0.5-1.5,2.2-1.5,2.7c-0.1,0.9-0.3,1.9-0.3,2.9 c-0.1,0.7-0.3,1.4-0.5,2.1c-1,0.6-2.2-0.2-2.6-1.6c-0.4-1.3-0.3-2.9,0.1-4.3c0.7-0.4,1.4-0.5,2.1,0.2c-0.2-0.2,1.7-2.5,1.5-2.7 c-1.2-1.2-2.3-0.2-3,0.9c0-0.1-0.6,0.9-0.7,1.2c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.2,0.5-0.2,0.4C37.9,41.3,37.3,43.6,38,45.8z"
                />
                <path
                  className="st0"
                  d="M49.1,37.6c-0.1-1.7-0.3-3.3-0.4-5c-0.1-1-0.7-2-0.7-3c0.2,2.7,0.5,5.4,0.6,8.2c-1.3,0.5-2.5,1.3-3.2,2.1 c0.5-0.6,1.5-0.7,2.2-1.1c0.4-0.1,0.7-0.1,1-0.1c0,2-0.1,4-0.4,6c-0.7,0.5-1.3,1-1.5,0.9c0.4,0.3,0.8,0.5,1.2,0.6 c-0.2,0.9-0.4,1.7-0.7,2.6c-1.2,3.5-3.3,6.9-6.3,9c-2.5,1.8-6.4,2.5-8.3,0.1c0.6-2.3,3.3-3.3,4.8-1.1c0.2,0.5,0.3,0.9,0.4,1.4 c0-0.3,0-0.6-0.1-0.9v0.1c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.8-0.3-1.6-0.6-2.3l0,0c0-0.1,0-0.2-0.1-0.3v0.1c-1-2.3-4.1-2.9-5.1-0.1 c-1.2,3.3,1.8,7.9,5.1,8c6.4,0.2,10.5-7.9,11.8-13.1c0.3-1.1,0.5-2.2,0.6-3.3c0.9-0.2,1.7-0.7,2.5-1.2c1.8-1,3-2.3,3-4.6 C54.6,37,51.7,36.7,49.1,37.6z M49.2,44c0.1-1.8,0-3.6-0.1-5.4c1.5,0.2,2.7,1.2,2.8,3.2c0,1.1-0.3,2-0.9,2.8c-0.1,0-0.2,0-0.2,0 C50.3,44.7,49.8,44.4,49.2,44C49.3,44,49.3,44,49.2,44z"
                />
                <path
                  className="st0"
                  d="M62.5,36.9c-0.6,0.1-1.2,0.2-1.4,0.6c-0.9,1.5-1.8,3.4-2.8,5c-0.4-2.3,1.1-7.8,1.4-8.6 c-0.2,0.6-2.6,0.5-2.8,1.2c-0.8,2.4-1.5,5.2-1.5,7.8c0,1.6,0.5,1.9,1.4,1.7l-0.1,0.1c0.2-0.1,0.4-0.2,0.6-0.2 c0.2-0.1,0.4-0.2,0.7-0.3c0.2-0.1,0.3-0.1,0.4-0.2c0.3-0.1,0.7-0.3,1-0.4c-0.1,0.8-0.2,1.5-0.2,2.3c0-0.4,2.8-0.7,2.8-1.2 c0.1-2.9,0.8-5.7,2-8.3C63.4,36.5,63,36.7,62.5,36.9z M59,43.5c0.1-0.1,0.2-0.1,0.3-0.2c0,0.1,0,0.1,0,0.2 C59.1,43.5,59,43.5,59,43.5z"
                />
                <path
                  className="st0"
                  d="M81.9,42.3c-0.2-1.2-0.8-3-1.7-3.5c-2.4-1.4-5.4,3-5.8,4.9c-0.2,1.4,0.5,3.3,1.2,4.4c0.9,1.7,2.5,0.9,3.8-0.4 c0.5,1.4,1,3.6,2.9,3.2c-0.1,0-0.9-2.9-1.1-2.9c-0.5,0.1-0.9,0.1-1.2-0.1c0-0.5,0.1-0.9,0.3-1.3c0.5-0.6,0.9-1.2,1.1-1.6 c0.1-0.2-0.2-0.8-0.6-1.4c-0.2-0.5-0.4-1-0.5-1.4c-0.5,0.5-0.8,1-1,1.6c-1,1.3-2.4,2.6-3.6,2.4c0.9-2.8,4.3-6.3,6-4.1 c0.1,0.3,0.2,0.6,0.2,0.8C82,42.8,82,42.6,81.9,42.3C81.9,42.4,81.9,42.4,81.9,42.3C81.9,42.4,81.9,42.4,81.9,42.3z"
                />
                <path
                  className="st0"
                  d="M34.2,50.3c3.9-6,3.8-15.4-2.3-20c-2.9-2.2-6-3.7-9.6-4c-0.1-0.5-0.2-1.1-0.4-1.6c-0.2-0.7-2.4-1-2.5-1.7 c0.2,1.1,0.5,2.3,0.8,3.4c-5.8,0.4-12,3.3-15.2,8.2c-3,4.6-4.5,11-0.3,15.4c1.9,2,5.3,4.4,8.2,3.8c4.8-0.9,9.6-11.5,6.1-15.6 c-0.4-0.5-1.9-1.6-2.5-1.7l0,0l0,0l0,0c-1.1-0.2-1.7,0.6-2.1,1.7c-0.5-0.5-1.1-0.9-1.9-1.2c0,0,0,0-0.1,0c-0.1-0.1-0.3-0.2-0.4-0.3 c0.1,0.1,0.2,0.1,0.3,0.2c-1.1-0.4-1.8-0.2-2.2,1.2c-0.7,2.2,0.7,5,1.9,6.7c0.6,0.8,2,1,2.5,1.7c-1-1.3-3.4-6.8-1.2-8 c0.4,1.2,0.4,2.6,0.4,3.7c0,0.2,0.7,0.6,1.4,0.9c0.4,0.3,0.8,0.5,1.2,0.8c0.2-0.7,0.3-3.7,1.1-5.2c0.4,2.6-0.7,5.5-1.8,7.7 c-1.8,3.5-4.5,6.6-8.3,5.1c-3.5-3.7-3.3-8.9-1-13.4c2.7-5.4,7.2-8.3,13-9.8c0.5-0.1,0.9-0.2,1.4-0.3c1.3,5.3,2.8,10.6,3.5,16 c0.3,2.7,0.8,6.1-0.1,8.9c-1.4,0.3-2.9,0.5-4.2,1.1c-1,0.4-3.1,1.2-3.4,2.4c-0.1,0.6,0.2,1.1,0.6,1.4l0,0l0,0 c0.3,0.3,0.7,0.5,1,0.7c0.7,0.5,1.5,1.2,2.4,1.4c1.7,0.2,3.6-1.6,4.6-2.7c0.7-0.8,1.1-1.7,1.5-2.7C29.9,54.2,32.2,53.2,34.2,50.3z  M26.1,42.5c-0.9-4.9-2.3-9.6-3.4-14.4c4-0.3,8,0.6,10,4.3c1.7,3.3,1.9,7.3,1.1,10.8c-0.8,3.4-2.5,6.8-5.5,8.7 c-0.4,0.2-0.8,0.4-1.2,0.6C27.5,49.1,26.7,45.4,26.1,42.5z M19.2,58.4c0.3-1,1.8-1.8,3.4-2.4C21.7,57,20.5,58.1,19.2,58.4z"
                />
                <path
                  className="st0"
                  d="M90.1,38.9c-1.9-8-6.4-14.4-14.2-17.6c-4.7-1.9-10-2.5-15.1-1.6c-0.1,0-0.2,0-0.4,0.1 c4.1-2.2,6.9-5.5,6.2-10.6v0.1c0-0.1,0-0.1-0.1-0.2c-0.1-0.8-0.3-1.6-0.6-2.5C64.2,1.3,58,0.2,54.2,3.9c-4.1,3.9-6.3,9.8-8.1,15.2 c-0.2-1-0.5-2-0.7-3C44.7,13.7,43,7.8,39.8,8c-3.7,0.2-2.8,5.4-2.2,7.8c0.7,3.1,2,5.7,4.7,7.5c0.7,0.5,1.5,0.9,2.3,1.2 c0.1,0.2,0.1,0.4,0.2,0.5v0.1c0,0.1,0.1,0.2,0.1,0.3v-0.1c0,0.1,0.1,0.3,0.1,0.4v0.1l0,0c0.2,0.4,0.4,0.8,0.9,1 c0.7,0.3,1.5,0,2-0.6c0.3-0.3,0.3-0.6,0.3-1c3,0.1,6.1-0.7,9-1.5c5.1-1.3,10.1-1.9,15.3-0.7c9.2,2.1,18.6,10,17.4,20.3 c-0.6,5.4-4.8,10.8-10.8,10c-6.5-0.8-6.7-7.5-4.9-12.4c0.1-0.2,0-0.5,0-0.7c-0.1-0.8-0.8-1.9-0.5-2.4c-0.1,0.1-0.1,0.3-0.2,0.4 c0-0.1,0-0.2,0-0.2c-0.1,0.2-0.1,0.4-0.2,0.6c-0.5,1.3-1,2.6-1.7,3.8c-0.4,0.7-2.3,2.6-3.4,2.2c0.3-2,1.1-4,1.7-5.8 c0.1-0.4,0-0.9-0.2-1.4c-0.1-0.5-0.2-1.1-0.3-1.6c-0.9,2.1-1.4,4.6-2.7,6.4c-0.5,0.8-2,1.7-2.8,1.2c0.3-1.9,1.2-3.8,1.8-5.4 c0.3-0.8-0.8-2.2-0.5-3c-1,2.5-1.9,5.1-1.8,7.7v-0.1c0,0.1,0,0.2,0,0.3c0,0.9,0.2,1.7,0.4,2.6l0,0l0,0l0,0c0.5,1.6,2.3,1.1,3.2,0 c0.2-0.3,0.4-0.6,0.6-1c0.1,1,0.2,2.3,0.7,2.7c1.4,1.2,3.2-1.2,3.8-2.1c0.1-0.2,0.2-0.4,0.3-0.6c0.1,4.6,1.5,9.4,5.3,11.1 c4.5,2.1,9.9-1,11.8-5.3C91.2,46.7,91,42.7,90.1,38.9z M66.3,8.2c0,4-3.4,7.2-6.8,9c-3.8,2-8.1,2.9-12.3,4 c1.7-4.8,3.6-9.6,6.9-13.4C57.7,3.8,63.7,3.4,66.3,8.2z M38.7,12.1c1.9-2.5,4.1-0.4,5.2,1.5c1.5,2.4,2.3,4.7,1.7,7.3 c-0.6,0-1.1,0.3-1.4,0.8C40.6,20.4,35.7,16.1,38.7,12.1z"
                />
              </g>
            </svg>
          )} */}
          {!isTopOfPage && <SVG src={'../../public/logo_black.svg'}></SVG>}
          {/* {isTopOfPage && <img src={'../../public/arrow-left.png'} />} */}
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
