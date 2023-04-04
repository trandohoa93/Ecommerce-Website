import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
import Item from '../../Assets/Images/ImageItem.svg';

function CardItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('image-container')}>
          <img src={Item} alt="Item" />
        </div>
        <div className={cx('info-container')}>
          <div className={cx('title')}>
            <p>Breed Dry Dog Food</p>
          </div>
          <div className={cx('des')}>
            <p className={cx('price')}>$100</p>
            <p className={cx('amount')}>(35)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
