import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <Typography variant='subtitle1'>Currently no items in your cart, let's add some!
                <Link to='/' className={classes.link}>Add items</Link>
            </Typography>
        )
    };

    const FilledCart = () => {
        return (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((lineItem) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem lineItem={lineItem} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>
                        Empty Cart
                    </Button>
                    <Button className={classes.checkOutButton} size='large' type='button' variant='contained' color='primary'>
                        Checkout
                    </Button>
                </div>
            </div>
        </>
        )
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items ? EmptyCart() : FilledCart()}
        </Container>
    )
}

export default Cart
