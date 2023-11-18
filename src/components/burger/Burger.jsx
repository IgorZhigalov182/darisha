import style from './Burger.module.scss';

const Burger = ({ active, setActive }) => {
  return (
    <button onClick={() => setActive(!active)} className={style.menu_btn}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
