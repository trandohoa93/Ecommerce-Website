import './Slide.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { getAllCategories } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import ImageSlide from '../../Assets/Images/Slide.svg';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);
const category = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicin',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

function Slide() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.categories.data);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('category')}>
          {data.map((item) => (
            <div className={cx('category-item')} key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className={cx('slide')}>
          <Slider {...settings}>
            <div>
              <img src={ImageSlide} alt="Slide" />
            </div>
            <div>
              <img src={ImageSlide} alt="Slide" />
            </div>
            <div>
              <img src={ImageSlide} alt="Slide" />
            </div>
            <div>
              <img src={ImageSlide} alt="Slide" />
            </div>
            <div>
              <img src={ImageSlide} alt="Slide" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slide;
