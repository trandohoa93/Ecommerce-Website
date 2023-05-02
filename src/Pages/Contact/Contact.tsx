import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import MailIcon from '../../Assets/Images/icons-mail.svg';
import PhoneIcon from '../../Assets/Images/icons-phone.svg';
import Button from '../../Components/Button';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <Link className={cx('main')} to="/">
            Home <span>/ </span>
          </Link>
          <span className={cx('sub')}>Contact</span>
        </div>
        <div className={cx('container')}>
          <div className={cx('info')}>
            <div className={cx('call')}>
              <div className={cx('title')}>
                <img src={MailIcon} alt="MailIcon" />
                <div className={cx('text-title')}>Call To Us</div>
              </div>
              <div className={cx('des')}>
                <p>We are avaiable 24/7, 7 days a week</p>
                <p>Phone: +0762548234</p>
              </div>
            </div>
            <div className={cx('write')}>
              <div className={cx('title')}>
                <img src={PhoneIcon} alt="PhoneIcon" />
                <div className={cx('text-title')}>Write To Us</div>
              </div>
              <div className={cx('des')}>
                <p>Fill out our form and we will contact you within 24 hours</p>
                <p>Email: customer@exclusive.com</p>
                <p>Email: support@exclusive.com</p>
              </div>
            </div>
          </div>

          <form className={cx('form-fill')}>
            <div className={cx('box-1')}>
              <input placeholder="Your Name" />
              <input placeholder="Your Email" />
              <input placeholder="Your Phone" />
            </div>
            <div className={cx('box-2')}>
              <textarea placeholder="Your massage" />
              <div className={cx('button')}>
                <Button
                  color="secondary"
                  onClick={() => {
                    console.log('hehe');
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
