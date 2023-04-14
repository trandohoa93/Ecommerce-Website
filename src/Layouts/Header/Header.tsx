import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../../Assets/Images/Cart.svg';
import IconLogo from '../../Assets/Images/Logo.svg';
import Search from '../../Assets/Images/Search.svg';
import UserIcon from '../../Assets/Images/user.svg';
import Wishlist from '../../Assets/Images/Wishlist.svg';
import DropdownLogin from '../../Components/DropdownLogin';
import TopHeader from '../../Components/TopHeader';
import { NAV_LINK } from '../../constants';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [handleDropdown, setHandleDropdown] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setHandleDropdown);

  return (
    <>
      <TopHeader />
      <header className={cx('wrapper')}>
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
              <button
                className={cx('dropdown')}
                onClick={() => setHandleDropdown(!handleDropdown)}
                ref={wrapperRef}
              >
                <img src={UserIcon} alt="UserIcon" />
                <DropdownLogin handleDropdown={handleDropdown} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
