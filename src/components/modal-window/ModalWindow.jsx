import { useEffect } from 'react';
import './ModalWindow.scss';

const ModalWindow = ({ active, setActive, children }) => {
  const handleCancelBack = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (active) {
      window.addEventListener('popstate', handleCancelBack);
    }
    window.removeEventListener('popstate', handleCancelBack);
  }, [active]);

  return (
    <div
      className={active ? 'modalWindow active' : 'modalWindow'}
      onClick={(e) => setActive(false)}>
      <div
        className={active ? 'modalWindow__content active' : 'modalWindow__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
