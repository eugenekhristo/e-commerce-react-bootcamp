import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/features/cart/cart.actions';
import { selectCartItemsTotalQuantity } from '../../redux/features/cart/cart.selectors';

const CartIcon = ({ itemsCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToPtops = state => ({
  itemsCount: selectCartItemsTotalQuantity(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToPtops,
  mapDispatchToProps
)(CartIcon);
