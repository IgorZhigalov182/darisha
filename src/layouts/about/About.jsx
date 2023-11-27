import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <DotsBackground>
        <h1 className={styles.title}>
          Набор «Дариша» это универсальное решение для <br /> оформления небольших подарков. Вы без
          ножниц, скотча <br /> и клея самостоятельно легко и быстро сможете <br /> упаковать
          сладости, сувениры, деньги и цветы в горшке.
        </h1>
        <h3 className={styles.second_title}>«Дариша» - легко оформить, приятно дарить!</h3>
      </DotsBackground>
    </section>
  );
};

export default About;
