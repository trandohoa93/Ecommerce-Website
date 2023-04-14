import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogin } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import Button from '../Button';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.userLogin.data);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitForm = () => {
    dispatch(userLogin({ username, password }));
    console.log(data);
    if (data.token) {
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // timestamp của thời điểm token hết hạn (1 giờ sau thời điểm hiện tại)
      localStorage.setItem('token', data.token);
      localStorage.setItem('expirationTime', expirationTime.toString());
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
      }, 60 * 60 * 1000);
      navigate('/');
    }
  };

  const setForm = () => {
    setUsername('mor_2314');
    setPassword('83r5^_');
  };

  return (
    <form>
      <div className={cx('form-title')}>
        <p className={cx('title')}>Login in to Exclusive</p>
        <p className={cx('des')}>Enter your details below</p>
      </div>
      <div className={cx('form-body')}>
        <div className={cx('form-input')}>
          <input
            placeholder="Name or Pone Number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={cx('form-button')}>
          <Button color="secondary" onClick={() => submitForm()}>
            Login
          </Button>
          <Button color="secondary" onClick={() => setForm()}>
            Fill Form
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
