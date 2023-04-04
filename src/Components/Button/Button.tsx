import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button() {
  return (
    <div className={cx('wrapper')}>
      <p>Button</p>
    </div>
  );
}

export default Button;
