import { lazy, useState } from 'react';
import styles from './Gallery.module.scss';
import ImageModal from './ImageModal';
import Arrows from './Arrows';

const Slide = ({ data, setShowImageModal, setCurrentModalData }) => {
  const openModal = (src, index) => {
    setShowImageModal(true);
    setCurrentModalData({
      src: src,
      slideNumber: index
    });

    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={styles.slider}>
      {data?.map((src, index) => (
        <div
          key={index}
          className={styles.img_container}
          onClick={() => {
            openModal(src, index);
          }}>
          <img
            style={{ gridArea: `pic${index}` }}
            className={`${styles.img_cut} ${styles.img_animation}`}
            alt="gallery"
            src={src}
          />
        </div>
      ))}
      <div className={styles.text_container} />
    </div>
  );
};

const getPicsSrc = (picNumber, picNumberOnSlide) => {
  const data = [];
  for (let i = 0; i < Math.ceil(picNumber / picNumberOnSlide); i++) {
    const scrs = [];
    for (let j = 0; j < picNumberOnSlide; j++) {
      scrs.push(
        `../public/gallery/gallery_${i * Math.ceil(picNumber / picNumberOnSlide) + j + 1}.jpg`
      );
    }
    data.push(scrs);
  }
  return data;
};

const Gallery = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({
    src: null,
    slideNumber: null
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateX, setTranslateX] = useState('translateX(0)');

  const picNumber = 20;
  const picNumberOnSlide = 5;
  const data = getPicsSrc(picNumber, picNumberOnSlide);

  const previousSlide = () => {
    currentSlide === 0
      ? setTranslateX(`translateX(-${(Math.ceil(picNumber / picNumberOnSlide) - 1) * 100}%)`)
      : setTranslateX(`translateX(-${(currentSlide - 1) * 100}%)`);

    currentSlide === 0
      ? setCurrentSlide(Math.ceil(picNumber / picNumberOnSlide) - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    currentSlide === Math.ceil(picNumber / picNumberOnSlide) - 1
      ? setTranslateX('translateX(0)')
      : setTranslateX(`translateX(-${(currentSlide + 1) * 100}%)`);

    currentSlide === Math.ceil(picNumber / picNumberOnSlide) - 1
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const onClose = () => {
    setShowImageModal(false);
    setCurrentModalData({
      src: null,
      slideNumber: null
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.container} id="gallery">
      <div className={styles.carousel}>
        {data?.map((slide, index) => (
          <div style={{ transform: translateX }} className={styles.slider_container} key={index}>
            <Slide
              setCurrentModalData={setCurrentModalData}
              setShowImageModal={setShowImageModal}
              data={slide}
              index={index}
            />
          </div>
        ))}
      </div>

      <Arrows next={nextSlide} previous={previousSlide} />

      <span className={styles.carousel_text}>
        <div>
          <span>Оригинальная</span>
          <span className={styles.highlight}>&nbsp;упаковка для подарка.</span>
          <span>&nbsp;Открытки и лента в комплекте!</span>
        </div>  
        <span className={styles.text_small}>"Дариша" - дари с удовольствием!</span>
      </span>
      {showImageModal && (
        <ImageModal
          data={data}
          onClose={onClose}
          currentData={currentModalData}
          topPosition={window.scrollY}
        />
      )}
    </section>
  );
};

export default Gallery;
