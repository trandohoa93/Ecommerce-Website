import classNames from 'classnames/bind';

import DropDownDown from '../../Assets/Images/Drop-Down-Small.svg';
import DropDownUp from '../../Assets/Images/Drop-Up-Small.svg';
import Gamepad from '../../Assets/Images/Gamepad-Cart-Small.svg';
import Button from '../../Components/Button';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);
function Cart() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('roadtext')}>
          <span className={cx('main')}>
            Home <span>/</span>
          </span>
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
              <tr>
                <td className={cx('name')}>
                  <img src={Gamepad} alt="Gamepad" />
                  <p>H1 Gamepad</p>
                </td>
                <td>450</td>
                <td className={cx('input')}>
                  <input type="number" defaultValue={1} className={cx('value')} />
                  <button className={cx('dropdown')}>
                    <img src={DropDownUp} alt="DropDown" />
                    <img src={DropDownDown} alt="DropDown" />
                  </button>
                </td>
                <td>$650</td>
              </tr>
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
            <Button color="white" onClick={() => console.log('hehe')}>
              Continue Shopping
            </Button>
            <Button color="white" onClick={() => console.log('hehe')}>
              Update Card
            </Button>
          </div>
          <div></div>
        </div>
        <div className={cx('box')}>
          <div className={cx('total')}>
            <p className={cx('cart-total')}>Cart Total</p>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Subtotal:</p>
              <p className={cx('price')}>$1750</p>
            </div>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Shipping:</p>
              <p className={cx('price')}>Free</p>
            </div>
            <div className={cx('total-item')}>
              <p className={cx('text')}>Total:</p>
              <p className={cx('price')}>$1750</p>
            </div>
            <div className={cx('checkout')}>
              <Button color="secondary" onClick={() => console.log('hehe')}>
                Process to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
