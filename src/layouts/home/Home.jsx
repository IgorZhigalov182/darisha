import style from './Home.module.scss';

const Home = () => {
  return (
    <section className={style.home_section}>
      <div className={style.home_wrapper}>
        <h1 className={style.home_name}>Дариша</h1>
        <h3>Play</h3>
        <h5 className={style.home_tag}>#everyone needs a line</h5>
      </div>
    </section>
  );
};

export default Home;
