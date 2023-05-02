import classNames from 'classnames/bind';
import { useEffect } from 'react';

import SideImage from '../../Assets/Images/SideImage.svg';
import LoginForm from '../../Components/LoginForm/LoginForm';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <div className={cx('side-images')}>
          <img src={SideImage} alt="SideImage" />
        </div>
        <div className={cx('form')}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
