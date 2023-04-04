import classNames from 'classnames/bind';

import SideImage from '../../Assets/Images/SideImage.svg';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import styles from './SignUp.module.scss';
const cx = classNames.bind(styles);

function SignUp() {
  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <div className={cx('side-images')}>
          <img src={SideImage} alt="SideImage" />
        </div>
        <div className={cx('form')}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
