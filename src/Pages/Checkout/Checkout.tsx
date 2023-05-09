import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);
const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <Link className={cx('main')} to="/">
            Home <span>/ </span>
          </Link>
          <Link className={cx('main')} to="/account">
            My Account <span>/ </span>
          </Link>
          <Link className={cx('main')} to="/products">
            Products<span>/ </span>
          </Link>
          <span className={cx('sub')}>CheckOut</span>
        </div>
        <div className={cx('container')}>
          <div className={cx('billing details')}></div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
