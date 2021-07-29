import React from 'react';
import Grid from '@material-ui/core';

//Adicionando Produtos e Preços
const products = [
    { id: 1, name: 'Computer', description: 'Running Computer.', price: 'R$5'},
    { id: 2, name: 'NotBook', description: 'Samsumg NotBook.', price: 'R$10'},
];
//Requisição map criada e ajustes pde aplicação para vizualizar em mobiles
const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;