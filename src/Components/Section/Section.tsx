import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import Icon from '../../Assets/Images/SectionIcon.svg';
import Button from '../Button';
import CardItem from '../CardItem';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.product.all_products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('category')}>
          <img src={Icon} alt="Icon" />
          <p>Categories</p>
        </div>
        <div className={cx('title')}>Explore Our Products</div>
      </div>
      <div className={cx('item-container')}>
        {(data ?? []).slice(0, 8).map((item, index) => {
          const { id, title, price, rating, image } = item;
          return (
            <CardItem
              key={index}
              id={id}
              title={title}
              price={price}
              rating={rating}
              image={image}
            />
          );
        })}
      </div>
      <div className={cx('button')}>
        <Link to="/products">
          <Button
            color="secondary"
            onClick={() => {
              console.log('heheh');
            }}
          >
            View All Product
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Section;
