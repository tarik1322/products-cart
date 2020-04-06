import React from 'react';
import CartItem from './CartItem';
import Container from '@material-ui/core/Container';

export default class CartList extends React.Component {
    render() {
        const { cart, addToCartAction, removeFromCartAction } = this.props;

        return(
            <Container maxWidth="md">
                <br />
                {
                    cart.map(item => <CartItem {...item} key={item.id} addToCartAction={addToCartAction} removeFromCartAction={removeFromCartAction} />)
                }
            </Container>
        );
    }
}