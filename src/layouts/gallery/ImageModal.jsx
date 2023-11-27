import ReactDOM from 'react-dom';
import styles from './Gallery.module.scss';
import Arrows from './Arrows';
import SideMenu from './SideMenu';
import { useEffect, useState } from 'react';

const InfoModal = ({ setShowInfoModal, children }) => {
    const [visible, setVisible] = useState(true);

    const onClose = async () => {
        setVisible(false);
        setTimeout(() => {
            setShowInfoModal(false);
        }, 1000);
    }

    return (
        <div id='modal' className={`${styles.info_modal_container}
            ${visible ? styles.info_modal_show : styles.info_modal_hide}`}>
            <div onClick={onClose} className={styles.close_button}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="#5E5E5E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

const modalRoot = document.getElementById("imageModal"); 

const ImageModal = ({ data, currentData, topPosition, onClose }) => {
    const [currentPic, setCurrentPic] = useState(data.flat().findIndex(src => src === currentData.src));
    const [translateX, setTranslateX] = useState(`translateX(-${currentPic * 100}%)`);
    const picNumber = data.flat().length;

    const [showInfoModal, setShowInfoModal] = useState(false);
    const [showModal, setShowModal] = useState(true);

    const onCloseWithAnimation = async () => {
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 100);
    }; 

    const previousPic = () => {
        currentPic === 0 ?
            setTranslateX(`translateX(0)`) :
            setTranslateX(`translateX(-${(currentPic - 1) * 100}%)`);

        currentPic === 0 ?
            setCurrentPic(picNumber - 1) :
            setCurrentPic(currentPic - 1);
    };

    const nextPic = () => {
        currentPic === picNumber - 1 ?
            setTranslateX(`translateX(0)`) :
            setTranslateX(`translateX(-${(currentPic + 1) * 100}%)`);

        currentPic === picNumber - 1 ?
            setCurrentPic(0) :
            setCurrentPic(currentPic + 1);
    };

    useEffect(() => {
        document.getElementById('icons').style.display = 'none';
        return () => document.getElementById('icons').style.display = 'block';
    }, []);

    return ReactDOM.createPortal((
        <div
            className={`${styles.modal_container}
            ${showModal ? styles.modal_container_show : styles.modal_container_hide}`}
            style={{ top: topPosition }}>
            <div className={styles.carousel}>
                {
                    data.flat().map((src, index) => <img style={{ transform: translateX }} key={index}
                        className={`${styles.slider_container} ${styles.modal_img}`} src={src} alt="gallery" />
                    )
                }
            </div>
            <SideMenu onClose={onCloseWithAnimation} showInfoModal={showInfoModal} setShowInfoModal={setShowInfoModal}/>
            <Arrows next={nextPic} previous={previousPic} />
            {
                showInfoModal && <InfoModal setShowInfoModal={setShowInfoModal}></InfoModal>
            }
        </div>
    ), modalRoot);
}

export default ImageModal;