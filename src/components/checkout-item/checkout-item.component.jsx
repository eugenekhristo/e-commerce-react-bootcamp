import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { removeCartItem } from './../../redux/features/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeCartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="CHeckout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: cartItem => dispatch(removeCartItem(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
