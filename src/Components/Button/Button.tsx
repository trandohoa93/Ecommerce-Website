import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Button {
  text: string;
  onClick?: () => void;
  variant: 'secondary' | 'white';
  disabled?: boolean;
  className?: string;
  icon?: string;
}

function Button(props: Button) {
  const { text, onClick, variant } = props;

  const className = cx({
    wrapper: true,
    variant,
  });

  return (
    <button className={cx(className)} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
}

export default Button;
