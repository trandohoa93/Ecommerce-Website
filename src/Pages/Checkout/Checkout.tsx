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
          <div className={cx('billing-details')}>
            <p className={cx('title')}>Billing Details</p>
            <form className={cx('info')}>
              <div>
                <p className={cx('text-input')}>First Name</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Company Name</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Street Address</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Apartment, floor, etc. (optional)</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Town/City</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Phone Number</p>
                <input />
              </div>
              <div>
                <p className={cx('text-input')}>Email Address</p>
                <input />
              </div>
              <div className={cx('checkbox')}>
                <input type="checkbox" id="info" name="info" value="info" />
                <label htmlFor="info">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
