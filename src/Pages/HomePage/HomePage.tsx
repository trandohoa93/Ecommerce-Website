import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Loading from '../../Assets/Images/Loading.svg';
import Section from '../../Components/Section';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import Slide from '../../Components/Slide';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (isLoading) {
    return (
      <div className={cx('loading')}>
        <img src={Loading} alt="LoadingIcon" />
      </div>
    );
  } else {
    return (
      <div className={cx('content')}>
        <Slide />
        <Section />
        <ServiceCard />
      </div>
    );
  }
}

export default Home;
