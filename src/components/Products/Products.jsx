import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';

const products = [
  { id: 1, name: "Sepatu", description: "sepatu kodok", price: 'Rp. 100.000', image: 'https://filedn.com/lmwhxh5a0dX5XBLIJgYg8Jp/learn-ecommerce-react/joseph-barrientos-4qSb_FWhHKs-unsplash.jpg' },
  { id: 1, name: "Macbook", description: "Apple Macbook Pro", price: 'Rp. 15.000.000', image: 'https://filedn.com/lmwhxh5a0dX5XBLIJgYg8Jp/learn-ecommerce-react/kari-shea-1SAnrIxw5OY-unsplash.jpg' },
  { id: 1, name: "Tas", description: "Tas keren", price: 'Rp. 70.000', image: 'https://filedn.com/lmwhxh5a0dX5XBLIJgYg8Jp/learn-ecommerce-react/brando-makes-branding-smTDI-z1rlY-unsplash.jpg' },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
          ))}
      </Grid>
    </main>
  )
}

export default Products;
