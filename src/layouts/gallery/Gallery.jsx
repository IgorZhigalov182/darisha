import styles from './Gallery.module.scss';

const Slide = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.img_container}>
        <img
          className={`${styles.img_cut} ${styles.img_animation}`}
          alt="gallery"
          src="../public/gallery/gallery_1.jpg"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className={`${styles.img_cut} ${styles.img_animation}`}
          alt="gallery"
          src="../public/gallery/gallery_2.jpg"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className={`${styles.img_cut} ${styles.img_animation}`}
          alt="gallery"
          src="../public/gallery/gallery_3.jpg"
        />
      </div>
      <div className={styles.img_container}>
        <img
          className={`${styles.img_cut} ${styles.img_animation}`}
          alt="gallery"
          src="../public/gallery/gallery_5.jpg"
        />
      </div>
      <div />
      <div className={styles.img_container}>
        <img
          className={`${styles.img_cut} ${styles.img_animation}`}
          alt="gallery"
          src="../public/gallery/gallery_6.jpg"
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className={styles.container} id="gallery">
      <Slide />
      <div className={`${styles.carousel_arrow} ${styles.arrow_left}`}>
        <svg
          height="15px"
          width="15px"
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="#5f5f5f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </div>
      <div className={`${styles.carousel_arrow} ${styles.arrow_right}`}>
        <svg
          height="15px"
          width="15px"
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="#5f5f5f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </div>
    </section>
  );
};

export default Gallery;
