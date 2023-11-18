import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.container} id="buy">
      <DotsBackground>
        <h1 className={styles.title}>
          please send an e-mail to contact@domainname.com or sign up to our newsletter bellow.
        </h1>
        <div className={styles.contacts}>
          <a href="">INSTAGRAM</a>
          <a href="">TWITTER</a>
        </div>
      </DotsBackground>
    </section>
  );
};

export default Contact;
