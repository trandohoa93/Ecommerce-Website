import classNames from 'classnames/bind';

import SideImage from '../../Assets/Images/SideImage.svg';
import LoginForm from '../../Components/LoginForm/LoginForm';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
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
