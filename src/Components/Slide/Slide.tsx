import './Slide.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { getAllCategories } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import ImageSlide from '../../Assets/Images/Slide.svg';
// import { updateFilters } from '../../Features/Product/getAllProductSlice';
import styles from './Slide.module.scss';

const cx = classNames.bind(styles);

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

function Slide() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.categories.data);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  // function handleClickCategory(item: string) {
  //   return function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //     const category = 'some category';
  //     dispatch(updateFilters({ category: category, item }));
  //     console.log(`Đã click vào category ${item}`);
  //   };
  // }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('category')}>
          {data.map((item) => (
            <button key={item}>
              <Link to="/products">
                <div className={cx('category-item')}>{item}</div>
              </Link>
            </button>
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
