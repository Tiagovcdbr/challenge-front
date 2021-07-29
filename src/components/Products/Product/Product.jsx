import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, iconBotton, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import useStyle from './styles';

// Classes de cartão para clientes  botão de carrinho sendo criado
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        // Evento Botão do carrinho sendo criado
        <Card className={classes.root}>
            <Cardmedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography guetterBottom variant="h5" component="h2">
                        {product.name}
                    </Typography>
                    <Typography guetterBottom variant="h5" component="h2">
                        {product.price.formatted}
                    </Typography>
                </div>                
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <cardActions disableSpacing classname={classes.cardActions}>
                <IconButton aria-label="Add to cart" onClick={handleAddToCart}> 
                    <AddShoppingCart />
                </IconButton>
            </cardActions>
        </Card>
    );
};

export default Product;
