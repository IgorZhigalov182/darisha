import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <DotsBackground>
        <h1 className={styles.title}>
          simplicity is not a style, it is more a philosophy about how to design something more
          effectively.
        </h1>
      </DotsBackground>
    </section>
  );
};

export default About;
