import React from 'react';
import Navbar from './componentes/Navbar';
import Carousel from './componentes/Carousel';
import ProductCards from './componentes/ProductCards';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <section className="product py-5">
        <ProductCards />
      </section>
    </div>
  );
};

export default App;
