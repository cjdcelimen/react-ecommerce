import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './styles';

const CartItem = ({ lineItem, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={lineItem.media.source} alt={lineItem.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h4'>{lineItem.name}</Typography>
                <Typography variant='h5'>{lineItem.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity - 1)}>-</Button>
                    <Typography>{lineItem.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => onUpdateCartQty(lineItem.id, lineItem.quantity + 1)}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(lineItem.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
