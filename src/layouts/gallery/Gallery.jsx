import { lazy, useState } from 'react';
import styles from './Gallery.module.scss';
import ImageModal from './ImageModal';
import Arrows from './Arrows';
import mapData from './data';

const Slide = ({ data, setShowImageModal, setCurrentModalData }) => {
  const openModal = (slide, index) => {
    setShowImageModal(true);
    setCurrentModalData({
      src: slide.src,
      title: slide.title,
      text: slide.text,
      slideNumber: index
    });

    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={styles.slider}>
      {data?.map((it, index) => (
        <div
          key={index}
          className={styles.img_container}
          onClick={() => {
            openModal(it, index);
          }}>
          <img
            style={{ gridArea: `pic${index}` }}
            className={`${styles.img_cut} ${styles.img_animation}`}
            alt=""
            src={it.src}
          />
        </div>
      ))}
      <div className={styles.text_container} />
    </div>
  );
};

const getPicsSrc = (picNumber, picNumberOnSlide, mapData) => {
  const data = [];
  for (let i = 0; i < Math.ceil(picNumber / picNumberOnSlide); i++) {
    const scrs = [];
    for (let j = 0; j < picNumberOnSlide; j++) {
      scrs.push({
        src: `/imgs/gallery/${mapData[i * picNumberOnSlide + j]?.src}`,
        title: mapData[i * picNumberOnSlide + j]?.title,
        text: mapData[i * picNumberOnSlide + j]?.text
      });
    }
    data.push(scrs);
  }
  return data;
};

const Gallery = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentModalData, setCurrentModalData] = useState({
    src: null,
    title: null,
    text: null,
    slideNumber: null
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [translateX, setTranslateX] = useState('translateX(0)');

  const picNumber = mapData.length;
  const picNumberOnSlide = 5;
  const data = getPicsSrc(picNumber, picNumberOnSlide, mapData);

  const previousSlide = () => {
    currentSlide === 0
      ? setTranslateX(`translateX(-${(Math.ceil(picNumber / picNumberOnSlide) - 1) * 100}%)`)
      : setTranslateX(`translateX(-${(currentSlide - 1) * 100}%)`);

    currentSlide === 0
      ? setCurrentSlide(Math.ceil(picNumber / picNumberOnSlide) - 1)
      : setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === Math.ceil(picNumber / picNumberOnSlide) - 1) {
      setTranslateX('translateX(0)');
    } else {
      setTranslateX(`translateX(-${(currentSlide + 1) * 100}%)`);
    }

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
        <span className={styles.text_small}>&laquo;Дариша&raquo; - дари с удовольствием!</span>
      </span>
      {showImageModal && (
        <ImageModal
          data={data}
          srcData={mapData}
          onClose={onClose}
          currentData={currentModalData}
          setCurrentData={setCurrentModalData}
        />
      )}
    </section>
  );
};

export default Gallery;
