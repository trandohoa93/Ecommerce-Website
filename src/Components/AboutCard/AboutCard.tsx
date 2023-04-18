import classNames from 'classnames/bind';

import styles from './AboutCard.module.scss';

const cx = classNames.bind(styles);

interface Props {
  key: string;
  item: { icon: any; title: string; des: string };
}

function AboutCard(props: Props) {
  const { item } = props;
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('icon-container')}>
          <img src={item.icon} alt="IconImage" />
        </div>
        <div className={cx('text')}>
          <p className={cx('title')}>{item.title}</p>
          <p className={cx('des')}>{item.des}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
