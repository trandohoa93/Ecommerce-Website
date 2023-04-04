import classNames from 'classnames/bind';

import AppStore from '../../Assets/Images/AppStore.svg';
import GooglePlay from '../../Assets/Images/GooglePlay.svg';
import IconFacebook from '../../Assets/Images/Icon-Facebook.svg';
import IconInstagram from '../../Assets/Images/icon-instagram.svg';
import IconLinedin from '../../Assets/Images/Icon-Linkedin.svg';
import Send from '../../Assets/Images/icon-send.svg';
import IconTwitter from '../../Assets/Images/Icon-Twitter.svg';
import Logo from '../../Assets/Images/Logo-white.svg';
import QrCode from '../../Assets/Images/Qr Code.svg';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('footer-item')}>
          <div>
            <div className={cx('text')}>
              <img className={cx('logo')} src={Logo} alt="Logo" />
              <p className={cx('text-title')}>Subscribe</p>
              <p className={cx('text-des')}>Get 10% off your first order</p>
            </div>
            <div className={cx('sendmail')}>
              <input placeholder="Enter your email" />
              <img src={Send} alt="Send" />
            </div>
          </div>
          <div className={cx('text')}>
            <p className={cx('text-title')}>Support</p>
            <div>
              <p className={cx('text-des')}>
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className={cx('text-des')}>exclusive@gmail.com</p>
              <p className={cx('text-des')}>+88015-88888-9999</p>
            </div>
          </div>
          <div className={cx('text')}>
            <p className={cx('text-title')}>Account</p>
            <div>
              <p className={cx('text-des')}>My Account</p>
              <p className={cx('text-des')}>Login / Register</p>
              <p className={cx('text-des')}>Cart</p>
              <p className={cx('text-des')}>Wishlist</p>
              <p className="shop-2hZ" id="I142:1522;128:1481">
                Shop
              </p>
            </div>
          </div>
          <div className={cx('text')}>
            <p className={cx('text-title')}>Quick Link</p>
            <div>
              <p className={cx('text-des')}>Privacy Policy</p>
              <p className={cx('text-des')}>Terms Of Use</p>
              <p className={cx('text-des')}>FAQ</p>
              <p className={cx('text-des')}>Contact</p>
            </div>
          </div>
          <div>
            <div className={cx('text')}>
              <p className={cx('text-title')}>Download App</p>
              <div>
                <p className={cx('text-save')}>Save $3 with App New User Only</p>
                <div className={cx('box-download')}>
                  <img className={cx('box-download-qr')} src={QrCode} alt="QrCode" />
                  <div className={cx('box-mobile')}>
                    <img src={GooglePlay} alt="GooglePlay" />
                    <img src={AppStore} alt="AppStore" />
                  </div>
                </div>
                <div className="appstore-of1" id="I142:1522;125:1467">
                  <div
                    className="download-appstore-joZ"
                    id="I142:1522;125:1467;125:1462"
                  ></div>
                </div>
              </div>
            </div>
            <div className={cx('social-icon')}>
              <img src={IconFacebook} alt="Icon" />
              <img src={IconTwitter} alt="Icon" />
              <img src={IconInstagram} alt="Icon" />
              <img src={IconLinedin} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
