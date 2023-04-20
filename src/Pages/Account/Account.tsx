import classNames from 'classnames/bind';

import Button from '../../Components/Button';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Account() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <div>
            <span className={cx('main')}>
              Home <span>/ </span>
            </span>
            <span className={cx('sub')}>Contact</span>
          </div>
          <div>
            <p>
              Welcome <span className={cx('name')}>Md Rimel</span>
            </p>
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('user-dropdown')}>
            <div className={cx('item')}>
              Manage My Account
              <ul>
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My Payment Options</li>
              </ul>
            </div>
            <div className={cx('item')}>
              My Orders
              <ul>
                <li>My Returns</li>
                <li>My Cancellations</li>
              </ul>
            </div>
            <div className={cx('item')}>My WishList</div>
          </div>
          <div className={cx('info')}>
            <form>
              <p className={cx('title')}> Edit Your Profile</p>
              <div className={cx('group-input')}>
                <div className={cx('name')}>
                  <div>
                    <p className={cx('text-input')}>First Name</p>
                    <input defaultValue={'MD'} />
                  </div>
                  <div>
                    <p className={cx('text-input')}>Last Name</p>
                    <input defaultValue={'Rimel'} />
                  </div>
                </div>
                <div className={cx('contact')}>
                  <div>
                    <p className={cx('text-input')}>Email</p>
                    <input defaultValue={'rimel11111@gmail.com'} />
                  </div>
                  <div>
                    <p className={cx('text-input')}>Address</p>
                    <input defaultValue={'Kingston, 5236, United State'} />
                  </div>
                </div>
                <div className={cx('password')}>
                  <p className={cx('text-input')}>Password Changes</p>
                  <div className={cx('input-password')}>
                    <input defaultValue={'Current Password'}></input>
                    <input defaultValue={'New Password'}></input>
                    <input defaultValue={'Confirm New Password'}></input>
                  </div>
                </div>
                <div className={cx('button')}>
                  <div>
                    <Button
                      color="secondary"
                      onClick={() => {
                        console.log('hhehe');
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      onClick={() => {
                        console.log('hhehe');
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
