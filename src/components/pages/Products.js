
    import React from 'react';
    import '../../App.css';
    import ProductsCards from '../ProductsCards';
    import Footer from '../Footer'; // Import Footer

    function Products() {
      return (
        <div className='products'>
          <ProductsCards />
          <Footer /> {/* Include Footer */}
        </div>
      );
    }

    export default Products;