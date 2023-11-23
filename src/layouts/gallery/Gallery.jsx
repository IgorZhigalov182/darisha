import { useEffect, useState } from 'react';
import styles from './Gallery.module.scss';
import SideMenu from '../../components/side-menu/SideMenu';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("imageModal"); 

const ImageModal = ({ data, topPosition, onClose }) => {
  return ReactDOM.createPortal((
    <div onClick={onClose}
      className={`${styles.modal_container} ${styles.invisible}`}
      style={{ top: topPosition }}>
      <img className={styles.modal_img} src={data.src} alt="gallery" />
    </div>
  ), modalRoot);
}

const Slide = ({ data,
                 setShowImageModal,
                 setCurrentModalData
                }) => {
  const openModal = (src, index) => {
    setShowImageModal(true);
    setCurrentModalData({
      src: src,
      slideNumber: index
    });

    document.body.style.overflow = 'hidden';
  };

  return (
    <div 
      className={styles.slider}>
      {data?.map((src, index) => (
        <div key={index}
          className={styles.img_container}
          onClick={() => {openModal(src, index)}}>
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
        `../public/gallery/gallery_${i * Math.ceil(picNumber / picNumberOnSlide) + j + 1}.jpg`,
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
              index={index} />
          </div>
        ))}
      </div>
      <div onClick={previousSlide} className={`${styles.carousel_arrow} ${styles.arrow_left}`}>
        <svg
          height="25px"
          width="25px"
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="#B2B2B2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </div>
      <div onClick={nextSlide} className={`${styles.carousel_arrow} ${styles.arrow_right}`}>
        <svg
          height="25px"
          width="25px"
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="#B2B2B2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </div>

      <span className={styles.carousel_text}>
        #ДАРИ<span className={styles.highlight}>&nbsp;с удовольствием</span>
      </span>
      {
        showImageModal && <ImageModal
          onClose={onClose} 
          data={currentModalData}
          topPosition={window.scrollY}/>
      }
    </section>
  );
};

export default Gallery;
