import classNames from 'classnames/bind';

import DropDrown from '../../Assets/Images/DropDown.svg';
import styles from './TopHeader.module.scss';

const cx = classNames.bind(styles);
function TopHeader() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('text')}>
          <p className={cx('text-1')}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className={cx('text-2')}>ShopNow</p>
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
