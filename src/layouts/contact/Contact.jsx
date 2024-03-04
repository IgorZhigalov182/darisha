import DotsBackground from '../../components/section-dots-background/DotsBackground';
import styles from './Contact.module.scss';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';

const Contacts = () => {
  const ymStyles = classNames(styles.shops_logo, styles.ym);
  const wbStyles = classNames(styles.shops_logo, styles.wb);
  const ozonStyles = classNames(styles.shops_logo, styles.ozon);
  const flowwowStyles = classNames(styles.shops_logo, styles.flowwow);

  return (
    <div id="icons" className={styles.contacts}>
      <a
        target="_blank"
        href="https://www.ozon.ru/seller/darisha-658045/products/?miniapp=seller_658045">
        <SVG className={ozonStyles} src="/imgs/contacts/ozon_lg.svg" />
      </a>
      <a target="_blank" href="https://www.wildberries.ru/catalog/66433927/detail.aspx">
        <SVG className={wbStyles} src="/imgs/contacts/wb_lg.svg" />
      </a>
      <a
        target="_blank"
        href="https://market.yandex.ru/product--meshochek-podarochnyi-dlia-deneg-i-tsvetov/1867311870?nid=51222334&sku=102472717900&do-waremd5=ykRClyEOmV7ggA488emqgw&cpc=0ghioAh9mfO6xV9GCzQKwnEtlNQCtFUhHdeeHCFWSONZmcgUCYCJXaMG0HaNPImZX5E3W8cQZlnnHBVS758hMeIj9_KJKDIFudujDrnPPjhIjLT0jlUVIYWOkrwsBCA_yRIz5tjcRC2TApqa6zkXGZFCOhLf52V6bSlE21J1x3H3Uuci7nYPK0jrwQSYVGMb7UYEeFsSSpl_DQYRiIUOuy52M88kWVDpkgvyBp1rhRU%2C&uniqueId=67023027&businessId=67023027">
        <SVG className={ymStyles} src="/imgs/contacts/ym_lg.svg" />
      </a>
      <a target="_blank" href="https://flowwow.com/shop/darisha/">
        <SVG className={flowwowStyles} src="/imgs/contacts/flowwow.svg" />
      </a>
    </div>
  );
};

const DevContacts = () => {
  return (
    <div className={styles.dev_contacts}>
      <h4>site's created by</h4>
      <div className={styles.authors}>
        <a target="_blank" href="https://t.me/IgorZhigalov">
          Igor Zhigalov
        </a>
        &
        <a target="_blank" href="https://t.me/geetork">
          Galina Li
        </a>
      </div>
    </div>
  );
};

const Cooperation = () => {
  // const tgStyles = classNames(styles.shops_logo);
  // const vkStyles = classNames(styles.shops_logo);

  return (
    <div className={styles.cooperation}>
      <div className={styles.coop_info}>
        <h3>Будем рады сотрудничеству</h3>
        <h3>+7 (993)-276-13-26</h3>
        <h3>
          darishapresents@yandex.ru <br />
        </h3>
      </div>
      <h3>Мы в социальных сетях</h3>
      <div className={styles.cooperation_social}>
        <a target="_blank" href="https://vk.com/darishapresents">
          <SVG className={styles.coop_social_logo} src="/imgs/logo/vk_logo.svg" />
        </a>
        <a target="_blank" href="https://t.me/darishapresentsguide">
          <SVG className={styles.coop_social_logo} src="/imgs/logo/tg_logo.svg" />
        </a>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section className={styles.container} id="buy">
      <DotsBackground>
        <h1 className={styles.title}>
          Наборы <span className={styles.highlight}>«Дариша»</span> представлены на популярных
          торговых площадках. <span className={styles.highlight}>Ознакомиться</span> с отзывами и
          <span className={styles.highlight}> приобрести</span> их вы сможете перейдя по ссылке ниже
        </h1>
        <Contacts />
        <h2 className={styles.title}>
          Также у нас Вы можете заказать{' '}
          <span className={styles.highlight}>корпоративные подарки</span>. Подберем красивый,
          душевный и <span className={styles.highlight}>оригинальный</span> вариант, учитывая Ваши
          пожелания, вкусы и бюджет. Предоставляем{' '}
          <span className={styles.highlight}>индивидуальные условия</span> оптовым покупателям.
        </h2>
        <Cooperation />
      </DotsBackground>
      <DevContacts />
    </section>
  );
};

export default Contact;
