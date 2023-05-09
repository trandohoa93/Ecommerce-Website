import './Slide.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { getAllCategories } from '@/Api/projectAPI';
import { RootState } from '@/App/store';
import ImageSlide1 from '@/Assets/Images/HOMEPAGE01.jpg';
import ImageSlide2 from '@/Assets/Images/HOMEPAGE02.jpg';
import ImageSlide3 from '@/Assets/Images/HOMEPAGE03.jpg';
import ImageSlide4 from '@/Assets/Images/HOMEPAGE04.jpg';

// import { updateFilters } from '@/Features/Product/getAllProductSlice';
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
              <Link to={`/products?category=${item}`}>
                <div className={cx('category-item')}>{item}</div>
              </Link>
            </button>
          ))}
        </div>
        <div className={cx('slide')}>
          <Slider {...settings}>
            <Link to="/products">
              <div>
                <img src={ImageSlide1} alt="Slide" className={cx('banner')} />
              </div>
            </Link>
            <Link to="/products">
              <div>
                <img src={ImageSlide2} alt="Slide" className={cx('banner')} />
              </div>
            </Link>
            <Link to="/products">
              <div>
                <img src={ImageSlide3} alt="Slide" className={cx('banner')} />
              </div>
            </Link>
            <Link to="/products">
              <div>
                <img src={ImageSlide4} alt="Slide" className={cx('banner')} />
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slide;
