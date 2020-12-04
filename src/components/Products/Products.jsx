import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';

const Products = () => {
    const classes = useStyles();
    const products = [
        { id: 1, name: 'Ultra Boost', description: 'adidas Ultra Boost S&L Star Wars X-Wing', price: '$100', image: 'https://stockx-360.imgix.net//adidas-Ultra-Boost-SL-Star-Wars-X-Wing/Images/adidas-Ultra-Boost-SL-Star-Wars-X-Wing/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1603481985&w=1000' },
        { id: 2, name: 'MacBook Air', description: '13-inch MacBook Air', price: '$1100', image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000' },
    ];

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
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