import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import {
  removeCartItem,
  addCartItem,
  decreaseCartItem
} from './../../redux/features/cart/cart.actions';

const CheckoutItem = ({
  cartItem,
  removeCartItem,
  icreaseCartItemQuantity,
  decreaseCartItemQuantity
}) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="CHeckout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => decreaseCartItemQuantity(cartItem)}
        >
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span
          className="arrow"
          onClick={() => icreaseCartItemQuantity(cartItem)}
        >
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeCartItem: cartItem => dispatch(removeCartItem(cartItem)),
  icreaseCartItemQuantity: cartItem => dispatch(addCartItem(cartItem)),
  decreaseCartItemQuantity: cartItem => dispatch(decreaseCartItem(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
