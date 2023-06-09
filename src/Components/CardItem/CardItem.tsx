import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);
import Star from '../Star';

interface Props {
  id: number;
  title: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  image: string;
}
function CardItem({ title, price, rating, image, id }: Props) {
  return (
    <Link to={`/productdetails/${id}`}>
      <div className={cx('inner')}>
        <div className={cx('image-container')}>
          <img src={image} alt="Item" />
        </div>
        <div className={cx('info-container')}>
          <div className={cx('title')}>
            <p>{title}</p>
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
    </Link>
  );
}

export default CardItem;
