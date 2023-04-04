import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './SignUpForm.module.scss';

const cx = classNames.bind(styles);
function SignUpForm() {
  return (
    <form>
      <div className={cx('form-title')}>
        <p className={cx('title')}>Create an account</p>
        <p className={cx('des')}>Enter your details below</p>
      </div>
      <div className={cx('form-body')}>
        <div className={cx('form-input')}>
          <input placeholder="Name" />
          <input placeholder="Email or PhoneNumber" />
          <input placeholder="Password" />
        </div>
        <div className={cx('form-button')}>
          <Button text="Create Account" variant="secondary" />
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
