import classNames from 'classnames/bind';

import Button from '../Button';
import styles from './SignUpForm.module.scss';

const cx = classNames.bind(styles);
function SignUpForm() {
  return (
    <form>
      <div className={cx('form-title')}>
        <p className={cx('title')}>Login in to Exclusive</p>
        <p className={cx('des')}>Enter your details below</p>
      </div>
      <div className={cx('form-body')}>
        <div className={cx('form-input')}>
          <input placeholder="Name or Pone Number" />
          <input placeholder="Password" />
        </div>
        <div className={cx('form-button')}>
          <Button
            color="secondary"
            onClick={() => {
              console.log('hehe');
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
