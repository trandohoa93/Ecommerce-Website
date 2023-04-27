import classNames from 'classnames/bind';

import CardItem from '../CardItem';
import styles from './GridView.module.scss';

const cx = classNames.bind(styles);

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  products: Product[];
}

const GridView = ({ products }: Props) => {
  return (
    <section>
      <div className={cx('products-container')}>
        {products.map((product) => {
          return <CardItem key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
