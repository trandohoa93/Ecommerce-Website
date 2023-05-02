import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import IconInstagram from '@/Assets/Images/icon-instagram (2).svg';
import IconLinkedin from '@/Assets/Images/Icon-Linkedin (2).svg';
import IconTwitter from '@/Assets/Images/Icon-Twitter (2).svg';
import SlideImage from '@/Assets/Images/Side Image (1).svg';
import AboutCard from '@/Components/AboutCard';
import ServiceCard from '@/Components/ServiceCard';
import { ABOUT_CARD } from '@/constants';
import { OWNER } from '@/constants';

import styles from './About.module.scss';

const cx = classNames.bind(styles);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

function About() {
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
          <span className={cx('sub')}>About</span>
        </div>
        <div className={cx('section')}>
          <section className={cx('section-slide')}>
            <div className={cx('text')}>
              <p className={cx('title')}>Our story</p>
              <div className={cx('des')}>
                <p>
                  Launced in 2015, Exclusive is South Asia’s premier online shopping
                  makterplace with an active presense in Bangladesh. Supported by wide
                  range of tailored marketing, data and service solutions, Exclusive has
                  10,500 sallers and 300 brands and serves 3 millioons customers across
                  the region.
                </p>
                <p>
                  Exclusive has more than 1 Million products to offer, growing at a very
                  fast. Exclusive offers a diverse assotment in categories ranging from
                  consumer.
                </p>
              </div>
            </div>
            <div className={cx('image')}>
              <img src={SlideImage} alt="SlideImage" />
            </div>
          </section>
          <section className={cx('card')}>
            {ABOUT_CARD.map((item) => {
              return <AboutCard item={item} key={item.title} />;
            })}
          </section>
          <section className={cx('slide-owner')}>
            <Slider {...settings} className={cx('my-slider')}>
              {OWNER.map((item) => {
                return (
                  <div key={item.name}>
                    <img src={item.image} alt="Owner" />
                    <div className={cx('info')}>
                      <div className={cx('info-main')}>
                        <p className={cx('name')}>{item.name}</p>
                        <p className={cx('pos')}>{item.pos}</p>
                      </div>
                      <div className={cx('social')}>
                        <a href={item.contact.twitter}>
                          <img src={IconTwitter} alt="Twitter" />
                        </a>
                        <a href={item.contact.ins}>
                          <img src={IconInstagram} alt="Instagram" />
                        </a>
                        <a href={item.contact.linkedin}>
                          <img src={IconLinkedin} alt="Linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </section>
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default About;
