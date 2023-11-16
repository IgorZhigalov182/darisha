import React from 'react';
import './ModalWindow.scss';

const ModalWindow = ({ active, setActive, children }) => {
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
