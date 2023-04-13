import { Product } from '../Product';
import './ProductsCards.css';

interface Props extends Product {}

function ProductsCards(props: Props): JSX.Element {
  return (
    <div className="product__card">
      <div className="img__product">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="product__info">
        <h2 className="prosuct__title">{props.title}</h2>
        <p className="product__price">Price: {props.price} USD</p>
        <div className="btn__container">
          <button className="add__btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
