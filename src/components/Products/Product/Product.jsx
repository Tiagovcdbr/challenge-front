import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, iconBotton, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'

// Classes de cartão para clientes  botão de carrinho sendo criado
const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <Cardmedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" guetterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                
                <Typography variant='h2' color="textSecondary">{product.description}</Typography>
            </CardContent>
            <cardActions disableSpacing classname={classes.cardActions}>
                <IconButton aria-label="Add to cart"> 
                    <AddShoppingCart />
                </IconButton>
            </cardActions>
        </Card>
    )
}

export default Product
