import './ModalWindow.scss';

const ModalWindow = ({ active, setActive, children }) => {
  history.pushState(null, null, location.href); // Push new history entry to stack
  history.back(); // Back to pevious page
  history.forward(); // Forward to next page

  window.addEventListener('popstate', () => {
    history.go(1);
  });

  return (
    <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modalWindow__content active' : 'modalWindow__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
