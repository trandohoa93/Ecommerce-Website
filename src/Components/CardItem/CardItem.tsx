import classNames from 'classnames/bind';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
import Star from '../Star';

interface Props {
  category: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  image: string;
}

function CardItem({ category, price, rating, image }: Props) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('image-container')}>
          <img src={image} alt="Item" />
        </div>
        <div className={cx('info-container')}>
          <div className={cx('title')}>
            <p>{category}</p>
          </div>
          <div className={cx('des')}>
            <p className={cx('price')}>${price}</p>
            <div className={cx('star')}>
              <Star stars={rating.rate} />
              <p className={cx('amount')}>({rating.count})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
