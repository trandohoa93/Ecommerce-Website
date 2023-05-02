import classNames from 'classnames/bind';

// import { Link } from 'react-router-dom';
import Button from '../Button';
import styles from './ListView.module.scss';

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

const ListView = ({ products }: Props) => {
  return (
    <section className={cx('listview')}>
      {products.map((product) => {
        const { id, image, title, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt="img" />
            <div>
              <p className={cx('title')}>{title}</p>
              <p className={cx('price')}>${price}</p>
              <p className={cx('des')}>{description.substring(0, 150)}...</p>
              <Link to={`/productdetails/${id}`}>
                <Button
                  padding="style2"
                  color="secondary"
                  onClick={() => console.log('hehe')}
                >
                  Details
                </Button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default ListView;
