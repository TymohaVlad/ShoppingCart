import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useState } from 'react';
import { Product } from '../Product';

import './Cart.css';

interface CartProps {
    order: Product[];
  }

  function Cart({ order }: CartProps) {
    const [cartOpen, setCartOpen] = useState<boolean>(false);
  
    return (
      <header className="header">
        <h3 className="cart__title">Cart</h3>
        <HiOutlineShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shopCart__button ${cartOpen && 'active'}`} />
        {cartOpen && (
          <div className='shop__cart'>
            {order.map((product) => (
              <div key={product.id} className="cart__product">
                <img src={product.image} alt={product.title} />
                <div className="product__info">
                  <h2 className="prosuct__title">{product.title}</h2>
                  <p className="product__price">Price:{product.price} USD</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </header>
    );
  }

export default Cart;





