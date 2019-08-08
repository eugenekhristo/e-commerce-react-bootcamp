import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';
import CustomButton from './../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../redux/features/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);