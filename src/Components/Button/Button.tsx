import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  color: 'secondary' | 'white';
  disabled?: boolean;
  className?: string;
  icon?: string;
  padding?: string;
}

function Button(props: Props) {
  const { children, onClick, color, padding } = props;

  const className = cx({
    wrapper: true,
    [`color-${color}`]: true,
    [`padding-${padding}`]: true,
  });

  return (
    <button className={cx(className)} onClick={onClick}>
      <p>{children}</p>
    </button>
  );
}

export default Button;
