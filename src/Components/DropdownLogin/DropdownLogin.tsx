import classNames from 'classnames/bind';

import IconCancel from '../../Assets/Images/icon-cancel.svg';
import IconLogout from '../../Assets/Images/Icon-logout.svg';
import IconMallBag from '../../Assets/Images/icon-mallbag.svg';
import IconReview from '../../Assets/Images/Icon-Reviews.svg';
import IconUser from '../../Assets/Images/user (1).svg';
import styles from './DropdownLogin.module.scss';

type Props = {
  handleDropdown: boolean;
};

const cx = classNames.bind(styles);
function DropdownLogin({ handleDropdown }: Props) {
  return (
    <ul className={cx('inner', { show: handleDropdown })}>
      <li>
        <img src={IconUser} alt="IconUser" />
        Manage My Account
      </li>
      <li>
        <img src={IconMallBag} alt="MallBag" />
        My Order
      </li>
      <li>
        <img src={IconCancel} alt="IconCancel" />
        My cancellations
      </li>
      <li>
        <img src={IconReview} alt="IconReview" />
        My reviews
      </li>
      <li>
        <img src={IconLogout} alt="IconLogout" />
        Logout
      </li>
    </ul>
  );
}

export default DropdownLogin;
