import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from '../components/product/Products';
import CartList from '../components/cart/CartList';
import { addToCartAction, removeFromCartAction } from '../store/actions/cartAction';
import { addToProductsAction } from '../store/actions/productsAction';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const style = {
  'color': '#FFFFFF',
  'cursor': 'pointer',
  'display': 'inline',
  'verticalAlign': 'middle'
};

class App extends React.Component {
  render() {
    const { cart, addToCartAction, addToProductsAction, products, removeFromCartAction } = this.props;

    return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Grid
            container
            direction="row"
            justify="center" 
            alignItems="center"
            >
              <Grid align="center" item xs={2} sm={2}><NavLink style={style} to="/">PRODUCTS</NavLink></Grid>
              <Grid align="center" item xs={2} sm={2}><NavLink title="My cart" style={style} to="/cart"><ShoppingCart style={{'display': 'inline-flex', 'verticalAlign': 'middle'}} /> ({cart.length})</NavLink></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact>
            <Products products={products} addToCartAction={addToCartAction} addToProductsAction={addToProductsAction} />
          </Route>
          <Route path="/cart">
            <CartList cart={cart} addToCartAction={addToCartAction} removeFromCartAction={removeFromCartAction} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    cart: state.cart,
    products: state.products
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction,
    addToProductsAction,
    removeFromCartAction
  }, dispatch);
}

export default connect(mapStateToProp, mapActionsToProps)(App);
