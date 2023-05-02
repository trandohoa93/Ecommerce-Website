import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import DropDrown from '../../Assets/Images/DropDown.svg';
import styles from './TopHeader.module.scss';

const cx = classNames.bind(styles);
function TopHeader() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('text')}>
          <p className={cx('text-1')}>
            Dive into Our Premium Swimwear Collection and Enjoy Free Express Delivery for
            a Limited Time!
          </p>
          <Link className={cx('text-2')} to="/products">
            ShopNow
          </Link>
        </div>
        <div className={cx('dropdown')}>
          <p>English</p>
          <img src={DropDrown} alt="dropdown" />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
