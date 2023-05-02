import classNames from 'classnames/bind';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { getSingleProduct } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import Delivery from '../../Assets/Images/icon-delivery.svg';
import Minus from '../../Assets/Images/icon-minus.svg';
import Plus from '../../Assets/Images/icon-plus.svg';
import Return from '../../Assets/Images/Icon-return.svg';
import Loading from '../../Assets/Images/Loading.svg';
import Button from '../../Components/Button';
import Star from '../../Components/Star';
import CartSlice, { addToCart } from '../../Features/Cart/CartSlice';
import { ProductType } from '../../Features/Product/getSingleProductSlice';
import styles from './ProductDetails.module.scss';
const cx = classNames.bind(styles);
function ProductDetails() {
  const dispatch = useDispatch<any>();
  const { id } = useParams();
  const data: ProductType = useSelector((state: RootState) => state.singleProduct.data);
  const loading = useSelector((state: RootState) => state.singleProduct.loading);
  const [value, setValue] = useState(1);

  const increaseValue = useCallback(
    (value) => () => {
      setValue((prev) => {
        const nextValue = prev + value;

        return nextValue ? nextValue : 1;
      });
    },
    [],
  );

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  const { title, price, category, description, image, rating } = data;

  if (loading) {
    return (
      <div className={cx('wrapper', 'loading')}>
        <img src={Loading} alt="Loading" />
      </div>
    );
  }
  const handleAddToCart = () => {
    dispatch(addToCart({ id: id, amount: value, product: data }));
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <span className={cx('main')}>
            Account <span>/ </span>
          </span>
          <span className={cx('main')}>
            Gaming <span>/ </span>
          </span>
          <span className={cx('sub')}>{category}</span>
        </div>
        <div className={cx('item')}>
          <img className={cx('item-image')} src={image} alt="Item" />
          <div className={cx('sub')}>
            <div className={cx('sub-title')}>
              <p className={cx('title')}>{title}</p>
              <div className={cx('star')}>
                <Star stars={rating.rate} />
                <p className={cx('amount')}>({rating.count})</p>
              </div>
              <p className={cx('price')}>${price}</p>
            </div>
            <p className={cx('des')}>{description}</p>
            <div className={cx('choice')}>
              {/* <div className={cx('colors')}>
                <p className={cx('text')}>Color:</p>
                <div className={cx('group-button')}>
                  <button className={cx('blue')} />
                  <button className={cx('pink')} />
                </div>
              </div> */}
              {/* <div className={cx('size')}>
                <p className={cx('text')}>Size:</p>
                <div className={cx('group-button')}>
                  <button>
                    <p>XS</p>
                  </button>
                  <button>
                    <p>S</p>
                  </button>
                  <button>
                    <p>M</p>
                  </button>
                  <button>
                    <p>L</p>
                  </button>
                  <button>
                    <p>XL</p>
                  </button>
                </div>
              </div> */}
              <div className={cx('form-button')} onSubmit={handleSubmit}>
                <form className={cx('form')}>
                  <button className={cx('decrease-button')} onClick={increaseValue(-1)}>
                    <img src={Minus} alt="Minus Icon" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="99999"
                    value={value}
                    onChange={handleChange}
                  />
                  <button className={cx('increase-button')} onClick={increaseValue(1)}>
                    <img src={Plus} alt="Plus Icon" />
                  </button>
                </form>
                <Link to="/cart">
                  <Button
                    color="secondary"
                    padding="style1"
                    onClick={() => {
                      handleAddToCart();
                    }}
                  >
                    Add To Cart
                  </Button>
                </Link>
              </div>
              <div className={cx('delivery')}>
                <div className={cx('delivery-item', 'first-box')}>
                  <img src={Delivery} alt="DeliveryIcon" />
                  <div className={cx('delivery-text')}>
                    <p className={cx('delivery-title')}>Free Delivery</p>
                    <p className={cx('delivery-des', 'underline')}>
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className={cx('delivery-item')}>
                  <img src={Return} alt="ReturnIcon" />
                  <div className={cx('delivery-text')}>
                    <p className={cx('delivery-title')}>Return Delivery</p>
                    <p className={cx('delivery-des')}>
                      <span>Free 30 Days Delivery Returns. </span>
                      <span className={cx('underline')}>Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
