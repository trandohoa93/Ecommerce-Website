import classNames from 'classnames/bind';

import Icon from '../../Assets/Images/SectionIcon.svg';
import CardItem from '../CardItem';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);
function Section() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('category')}>
          <img src={Icon} alt="Icon" />
          <p>Categories</p>
        </div>
        <div className={cx('title')}>Explore Our Products</div>
      </div>
      <div className={cx('item-container')}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
}

export default Section;
