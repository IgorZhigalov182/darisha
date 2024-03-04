import styles from './Gallery.module.scss';

const SideMenu = ({ onClose, setShowInfoModal }) => {
  const showHideInfoModal = () => setShowInfoModal(true);

  const svgStyle = {
    fill: '#5f5f5f'
  };

  return (
    <div className={styles.sidemenu_container}>
      <div className={styles.sidemenu_item} onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
        </svg>
      </div>
      <div className={styles.sidemenu_item} onClick={showHideInfoModal}>
        <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
      </div>
    </div>
  );
};

export default SideMenu;
