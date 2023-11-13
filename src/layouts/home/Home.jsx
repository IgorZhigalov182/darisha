import { useState } from 'react';
import style from './Home.module.scss';
import ModalWindow from '../../components/modalWindow/ModalWindow';

const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <section className={style.home_section}>
      <div className={style.home_wrapper}>
        <h1 className={style.home_name}>Дариша</h1>
        <div className={style.home_play} onClick={() => setActive(!active)}>
          <i className="fa-regular fa-circle-play fa-2xl" style={{ fontSize: '4rem' }}></i>
        </div>
        <h5 className={style.home_tag}>#Дари с удовольствием</h5>
      </div>
      <div className={style.home_scrol}>
        <div className={style.home_scrol_wrapper}>
          <div className={style.home_scrol_line}></div>
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BvmDrjd-KAE?si=vrIqiIbvt5h2U8fB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </ModalWindow>
    </section>
  );
};

export default Home;
