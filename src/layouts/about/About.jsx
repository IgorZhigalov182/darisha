import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './About.module.scss';

const About = () => {
  const options = {
    root: document.getElementById('about'),
    rootMargin: "20px",
    threshold: 1.0,
  };

  const callback = function (entries, observer) {
    console.log('hello');
  };

  const observer = new IntersectionObserver(callback, options);

  return (
    <section className={styles.container} id="about">
      <DotsBackground>
        <h1 className={styles.title}>
          Набор <span className={styles.highlight}>«Дариша»</span> это универсальное решение для <span className={styles.highlight}>оформления небольших подарков.</span> Вы без
          ножниц, скотча и клея <span className={styles.highlight}>самостоятельно</span> легко и быстро сможете <span className={styles.highlight}>упаковать</span>
          &nbsp;сладости, сувениры, деньги и <span className={styles.highlight}>цветы</span> в горшке
        </h1>
        <h3 className={styles.second_title}>«Дариша» - легко оформить, приятно дарить!</h3>
      </DotsBackground>
    </section>
  );
};

export default About;
