import classNames from 'classnames/bind';
import { SubmitHandler, useForm } from 'react-hook-form';

import SideImage from '../../Assets/Images/SideImage.svg';
import styles from './SignUp.module.scss';
const cx = classNames.bind(styles);

interface Inputs {
  example: string;
  exampleRequired: string;
}

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example'));
  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <div className={cx('side-images')}>
          <img src={SideImage} alt="SideImage" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={cx('title-container')}>
            <p className={cx('title')}>Log in to Exclusive</p>
            <p className={cx('des')}>Enter your details below</p>
          </div>
          <input defaultValue="test" {...register('example')} />
          <input {...register('exampleRequired', { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
