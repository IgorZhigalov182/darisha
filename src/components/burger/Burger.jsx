import style from './Burger.module.scss';

const Burger = () => {
  return (
    <button className={style.menu_btn}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
