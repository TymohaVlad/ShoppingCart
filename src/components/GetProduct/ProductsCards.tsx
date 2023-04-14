import { Product } from '../Product';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './ProductsCards.css';

interface Props extends Product {}

function ProductsCards(props: Props): JSX.Element {
  const [order, setOrder] = useState<Product[]>([]);

  const addToOrder = (item: Product) => {
    const newOrder = [...order, item];
    setOrder(newOrder);
    console.log(newOrder);
  };
 

  return (
    <div className="product__card">
      <div className="img__product">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product__info">
        <h2 className="prosuct__title">{props.title}</h2>
        <p className="product__price">Price:{props.price} USD</p>
        <div className="btn__container">
          <button onClick={() => addToOrder(props)} className="add__btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
