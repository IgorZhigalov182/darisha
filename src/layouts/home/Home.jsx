import style from './Home.module.scss';

const Home = () => {
  return (
    <section className={style.home_section}>
      <div className={style.home_wrapper}>
        <h1 className={style.home_name}>Дариша</h1>
        <div className={style.home_play}>
          <i className="fa-regular fa-circle-play fa-2xl" style={{ fontSize: '4rem' }}></i>
        </div>
        <h5 className={style.home_tag}>#Дари с удовольствием</h5>
      </div>
      <div className={style.home_scrol}>
        <div className={style.home_scrol_wrapper}>
          <div className={style.home_scrol_line}></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
