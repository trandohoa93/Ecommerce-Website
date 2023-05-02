import classNames from 'classnames/bind';

import Customer from '@/Assets/Images/Customer.svg';
import Delyvery from '@/Assets/Images/Delivery.svg';
import MoneyBack from '@/Assets/Images/MoneyBack.svg';

import styles from './ServiceCard.module.scss';

const cx = classNames.bind(styles);

const servicesInfo = [
  {
    icon: Delyvery,
    title: 'FREE AND FAST DELIVERY',
    des: 'Free delivery for all orders over $140',
  },
  {
    icon: Customer,
    title: '24/7 CUSTOMER SERVICE',
    des: 'Friendly 24/7 customer support',
  },
  {
    icon: MoneyBack,
    title: 'MONEY BACK GUARANTEE',
    des: 'We return money within 30 days',
  },
];

function ServiceCard() {
  return (
    <div className={cx('wrapper')}>
      {servicesInfo.map((item) => {
        return (
          <div key={item.title} className={cx('inner')}>
            <img alt="icon" src={item.icon} />
            <div className={cx('text')}>
              <p className={cx('text-title')}>{item.title}</p>
              <p className={cx('text-des')}>{item.des}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceCard;
