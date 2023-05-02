import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdCancel } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '@/App/store';
import DropDownDown from '@/Assets/Images/Drop-Down-Small.svg';
import DropDownUp from '@/Assets/Images/Drop-Up-Small.svg';
import Button from '@/Components/Button';
import {
  clearCart,
  countCartTotals,
  removeCart,
  toggleCartItemAmount,
} from '@/Features/Cart/CartSlice';
import { formatPrice } from '@/Utils/helpers';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartSlice.cart);
  const total_amount = useSelector((state: RootState) => state.cartSlice.total_amount);

  const isLogin = useSelector((state: RootState) => state.userLogin.isLogin);

  console.log(isLogin);
  useEffect(() => {
    dispatch(countCartTotals());
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const increase = (id: any) => {
    dispatch(toggleCartItemAmount({ id, value: 'inc' }));
  };
  const decrease = (id: any) => {
    dispatch(toggleCartItemAmount({ id, value: 'dec' }));
  };
  const clearCard = () => {
    dispatch(clearCart());
  };
  const handleRemoveCart = (id: any) => {
    dispatch(removeCart(id));
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <Link className={cx('main')} to="/">
            Home <span>/</span>
          </Link>
          <span className={cx('sub')}>Cart</span>
        </div>
        <div className={cx('product')}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c) => {
                return (
                  <tr key={c.id}>
                    <td className={cx('name')}>
                      <img src={c.image} alt="Gamepad" />
                      <button onClick={() => handleRemoveCart(c.id)}>
                        <IconContext.Provider
                          value={{ color: 'DB4444', className: 'cancel' }}
                        >
                          <div>
                            <MdCancel />
                          </div>
                          <p>{c.title.substring(0, 50)}</p>
                        </IconContext.Provider>
                      </button>
                    </td>
                    <td>{c.price}</td>
                    <td className={cx('input')}>
                      <input type="number" value={c.amount} className={cx('value')} />
                      <button className={cx('dropdown')}>
                        <button onClick={() => increase(c.id)}>
                          <img src={DropDownUp} alt="DropDown" />
                        </button>
                        <button onClick={() => decrease(c.id)}>
                          <img src={DropDownDown} alt="DropDown" />
                        </button>
                      </button>
                    </td>
                    <td>{formatPrice(c.price * c.amount)}</td>
                  </tr>
                );
              })}

              {/* <tr>
                <td className={cx('name')}>
                  <img src={LCDmonitor} alt="LCDmonitor" />
                  <p>LCD Monitor</p>
                </td>
                <td>350</td>
                <td>
                  <input type="number" defaultValue={1} className={cx('value')} />
                </td>
                <td>$1000</td>
              </tr> */}
            </tbody>
          </table>
          <div className={cx('button-cart')}>
            <Link to="/products">
              <Button color="white" onClick={() => console.log('hehe')}>
                Continue Shopping
              </Button>
            </Link>
            <Button color="white" onClick={() => clearCard()}>
              Clear Shopping Cart
            </Button>
          </div>
          <div></div>
        </div>
        <div className={cx('box')}>
          <div className={cx('total')}>
            <p className={cx('cart-total')}>Cart Total</p>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Subtotal:</p>
              <p className={cx('price')}>{formatPrice(total_amount)}</p>
            </div>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Shipping:</p>
              <p className={cx('price')}>Free</p>
            </div>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Total:</p>
              <p className={cx('price')}>{formatPrice(total_amount)}</p>
            </div>
            <div className={cx('checkout')}>
              {!isLogin ? (
                <Link to="/login">
                  <Button color="secondary" onClick={() => console.log('hehe')}>
                    Login
                  </Button>
                </Link>
              ) : (
                <Button
                  color="secondary"
                  onClick={() => console.log('hehe')}
                  disabled={true}
                >
                  Process to checkout
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
