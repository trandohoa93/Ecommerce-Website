import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { userLogin } from '@/Api/projectAPI';
import { RootState } from '@/App/store';
import { login, logout } from '@/Features/User/userLoginSlice';

import Button from '../Button';
import styles from './LoginForm.module.scss';

const cx = classNames.bind(styles);

type LoginFormInputs = {
  username: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const data = useSelector((state: RootState) => state.userLogin.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormInputs>();

  useEffect(() => {
    if (data.token) {
      const expirationTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem('token', data.token);
      localStorage.setItem('expirationTime', expirationTime.toString());
      dispatch(login());
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        dispatch(logout());
      }, 60 * 60 * 1000);
      navigate('/');
    }
  }, [data.token]);

  const onSubmit = (formData: LoginFormInputs) => {
    dispatch(userLogin(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cx('form-title')}>
        <p className={cx('title')}>Login in to Exclusive</p>
        <p className={cx('des')}>Enter your details below</p>
      </div>
      <div className={cx('form-body')}>
        <div className={cx('form-input')}>
          <input
            placeholder="Name or Phone Number"
            {...register('username', { required: true })}
          />
          {errors.username && <span>This field is required</span>}
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className={cx('form-button')}>
          <Button color="secondary" type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
