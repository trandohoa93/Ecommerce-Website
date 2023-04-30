import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../../App/store';
import Cart from '../../Assets/Images/Cart.svg';
import IconLogo from '../../Assets/Images/Logo.svg';
import UserIcon from '../../Assets/Images/user.svg';
import Wishlist from '../../Assets/Images/Wishlist.svg';
import DropdownLogin from '../../Components/DropdownLogin';
import SearchItem from '../../Components/SearchItem';
import TopHeader from '../../Components/TopHeader';
import { NAV_LINK } from '../../constants';
import { login, logout } from '../../Features/User/userLoginSlice';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  }, []);

  const isLogin = useSelector((state: RootState) => state.userLogin.isLogin);

  const [handleDropdown, setHandleDropdown] = useState<boolean>(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setHandleDropdown);

  return (
    <>
      <TopHeader />
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <Link to="/">
            <div className={cx('logo')}>
              <img src={IconLogo} alt="Logo" />
            </div>
          </Link>
          <ul className={cx('nav-item')}>
            {NAV_LINK.map((link) => {
              return (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              );
            })}
            <li className={cx({ login: isLogin })}>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className={cx('search')}>
            <SearchItem />
            <div className={cx('button-item')}>
              <button>
                <img src={Wishlist} alt="Wishlist" />
              </button>
              <Link to="cart">
                <button>
                  <img src={Cart} alt="Cart" />
                </button>
              </Link>
              <button
                className={cx({ dropdown: !isLogin })}
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
