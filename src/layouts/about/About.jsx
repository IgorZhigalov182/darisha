import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <DotsBackground>
        <h1 className={styles.title}>
          <span className={styles.highlight}>«Дариша»</span> — производитель наборов для
          декорирования подарков.{' '}
          <span className={styles.highlight}>Мешочек подарочный «Дариша»</span> — это универсальная
          упаковка для небольших подарков. Вы без ножниц, скотча и клея самостоятельно и быстро
          сможете красиво оформить конфеты, деньги и даже комнатные цветы в{' '}
          <span className={styles.highlight}>подарок!</span>
        </h1>
        <h3 className={styles.second_title}>«Дариша» - легко упаковать, приятно дарить!</h3>
      </DotsBackground>
    </section>
  );
};

export default About;
