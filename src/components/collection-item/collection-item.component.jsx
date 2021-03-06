import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './collection-item.style.scss';
import CustomButton from './../custom-button/custom-button.component';
import { addCartItem } from '../../redux/features/cart/cart.actions';

const CollectionItem = ({ item, addCartItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton isInverted onClick={() => addCartItem(item)}>
        add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(CollectionItem));
