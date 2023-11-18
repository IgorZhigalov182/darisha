import style from './Burger.module.scss';

const Burger = ({ active, setActive, isTopOfPage }) => {
  return (
    <button onClick={() => setActive(!active)} className={style.menu_btn}>
      <span className={isTopOfPage ? style.white_span : ''}></span>
      <span className={isTopOfPage ? style.white_span : ''}></span>
      <span className={isTopOfPage ? style.white_span : ''}></span>
    </button>
  );
};

export default Burger;
