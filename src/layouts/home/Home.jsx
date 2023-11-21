import { useState } from 'react';
import style from './Home.module.scss';
import ModalWindow from '../../components/modal-window/ModalWindow';
import SVG from 'react-inlinesvg';

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={style.home_section} id="home">
      <div className={style.home_wrapper}>
        <h1 className={style.home_name} style={{ textAlign: 'center', width: '90vw' }}>
          Упаковать подарок оригинально? <br /> Легко!
        </h1>
        {/* <h1 className={style.home_name}>
          <SVG
            style={{ marginTop: '-250px', width: '300px', height: '200px' }}
            src="../public/logo.svg"></SVG>
        </h1> */}
        <div className={style.home_play} onClick={() => setActive(!active)}>
          <i className="fa-regular fa-circle-play fa-2xl" style={{ fontSize: '4rem' }}></i>
        </div>
        <h5 className={style.home_tag} style={{ textAlign: 'center' }}>
          Льняной мешочек-кашпо "Дариша" <br /> поможет вам красиво оформить деньги, сладости и даже
          цветы за 3 минуты. <br />
          Открытки и тесьма в комплекте!
        </h5>
      </div>
      <div className={style.home_scrol}>
        <div className={style.home_scrol_wrapper}>
          <div className={style.home_scrol_line}></div>
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        {active && (
          <iframe
            loading="lazy"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BvmDrjd-KAE?si=vrIqiIbvt5h2U8fB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        )}
      </ModalWindow>
    </section>
  );
};

export default Home;
