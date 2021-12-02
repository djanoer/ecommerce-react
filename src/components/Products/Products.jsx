import React from "react";
import { Grid } from "@material-ui/core";

import Product from './Product/Product';

const products = [
  { id: 1, name: "Sepatu", description: "sepatu renang", price: 'Rp. 100.000' },
  { id: 1, name: "Macbook", description: "Apple Macbook", price: 'Rp. 15.000.000' },
  { id: 1, name: "Sandal", description: "Sandal santai", price: 'Rp. 70.000' },
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
