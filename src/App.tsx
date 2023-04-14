
import Home from './pages/home/Home';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { Product } from './components/Product';
import './App.css';

function App(): JSX.Element {
  const [order, setOrder] = useState<Product[]>([]);

  return(
    <main className='main'>
      <Cart order={order} />
      <Home/>
    </main>
  )
}

export default App;
