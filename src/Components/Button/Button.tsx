import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children?: React.ReactNode;
  onClick?: (e?: any) => void;
  color: 'secondary' | 'white';
  disabled?: boolean;
  className?: string;
  icon?: string;
  padding?: string;
  type?: 'submit' | 'button';
}

function Button(props: Props) {
  const { children, onClick, color, padding, type } = props;

  const className = cx({
    wrapper: true,
    [`color-${color}`]: true,
    [`padding-${padding}`]: true,
  });

  return (
    <button className={cx(className)} onClick={onClick} type={type}>
      <p>{children}</p>
    </button>
  );
}

export default Button;
