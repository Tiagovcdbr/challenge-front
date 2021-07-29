import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

//Adicionando Produtos e Preços
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
  
    if (!products.length) return <p>Loading...</p>;
 // Modelos dos produtos para serem vistos pelo mobile 
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    );
  };
  
  export default Products;
  