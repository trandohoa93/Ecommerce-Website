import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { userLogin } from '../../Api/projectAPI';
import { RootState } from '../../App/store';
import Button from '../Button';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

function LoginForm() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.userLogin.data);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitForm = () => {
    dispatch(userLogin({ username, password }));
    console.log(data);
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
          <input placeholder="Name or Pone Number" value={username} />
          <input placeholder="Password" value={password} />
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
