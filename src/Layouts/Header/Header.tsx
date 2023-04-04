import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Cart from '../../Assets/Images/Cart.svg';
import IconLogo from '../../Assets/Images/Logo.svg';
import Search from '../../Assets/Images/Search.svg';
import Wishlist from '../../Assets/Images/Wishlist.svg';
import TopHeader from '../../Components/TopHeader';
import { NAV_LINK } from '../../constants';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <TopHeader />
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={IconLogo} alt="Logo" />
        </div>
        <ul className={cx('nav-item')}>
          {NAV_LINK.map((link) => {
            return (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
        <div className={cx('search')}>
          <div className={cx('search-item')}>
            <input placeholder="What are you looking for?" />
            <button className={cx('clear')}>
              <img src={Search} alt="Search" />
            </button>
          </div>
          <div className={cx('button-item')}>
            <button>
              <img src={Wishlist} alt="Wishlist" />
            </button>
            <button>
              <img src={Cart} alt="Cart" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
