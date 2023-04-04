import classNames from 'classnames/bind';

import Section from '../../Components/Section';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import Slide from '../../Components/Slide';
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('content')}>
      <Slide />
      <Section />
      <ServiceCard />
    </div>
  );
}

export default Home;
