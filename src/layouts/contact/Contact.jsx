import DotsBackground from '../../components/section-dots-background/DotsBackground';
import SVG from 'react-inlinesvg';
import styles from './Contact.module.scss';
import classNames from 'classnames';

const Contact = () => {
  const ymStyles = classNames(styles.shops_logo, styles.ym);
  const wbStyles = classNames(styles.shops_logo, styles.wb);
  const ozonStyles = classNames(styles.shops_logo, styles.ozon);

  return (
    <section className={styles.container} id="buy">
      <DotsBackground>
        <h1 className={styles.title}>
          Наборы <span className={styles.highlight}>«Дариша»</span> представлены на популярных торговых площадках. <span className={styles.highlight}>Ознакомиться</span> с отзывами и
          <span className={styles.highlight}> приобрести</span> их вы сможете перейдя по ссылке ниже
        </h1>
        <div id='icons' className={styles.contacts}>
          <a
            target="_blank"
            href="https://www.ozon.ru/seller/darisha-658045/products/?miniapp=seller_658045">
            <SVG className={ozonStyles} src="../public/ozon_lg.svg" />
          </a>
          <a target="_blank" href="https://www.wildberries.ru/catalog/66433927/detail.aspx">
            <SVG className={wbStyles} src="../public/wb_lg.svg" />
          </a>
          <a
            target="_blank"
            href="https://market.yandex.ru/product--meshochek-podarochnyi-dlia-deneg-i-tsvetov/1867311870?nid=51222334&sku=102472717900&do-waremd5=ykRClyEOmV7ggA488emqgw&cpc=0ghioAh9mfO6xV9GCzQKwnEtlNQCtFUhHdeeHCFWSONZmcgUCYCJXaMG0HaNPImZX5E3W8cQZlnnHBVS758hMeIj9_KJKDIFudujDrnPPjhIjLT0jlUVIYWOkrwsBCA_yRIz5tjcRC2TApqa6zkXGZFCOhLf52V6bSlE21J1x3H3Uuci7nYPK0jrwQSYVGMb7UYEeFsSSpl_DQYRiIUOuy52M88kWVDpkgvyBp1rhRU%2C&uniqueId=67023027&businessId=67023027">
            <SVG className={ymStyles} src="../public/ym_lg.svg" />
          </a>
        </div>
      </DotsBackground>
      <div className={styles.dev_contacts}>
        <h4>site's created by</h4>
        <div className={styles.authors}>
          <a href="https://t.me/IgorZhigalov">Igor Zhigalov</a>&
          <a href="https://t.me/geetork">Galina Li</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
