import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '@/Components/Button';

import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <Link className={cx('main')} to="/">
            Home <span>/ </span>
          </Link>
          <span className={cx('sub')}>404 Error</span>
        </div>
        <div className={cx('container')}>
          <div className={cx('text')}>
            <p className={cx('title')}>404 Not Found</p>
            <p className={cx('des')}>
              Your visited page not found. You may go home page.
            </p>
          </div>
          <Button
            color="secondary"
            onClick={() => {
              console.log('hehe');
            }}
          >
            Back to home page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;
