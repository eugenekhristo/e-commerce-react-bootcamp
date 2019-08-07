import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-item.style.scss';
import CustomButton from './../custom-button/custom-button.component';

const CollectionItem = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton isInverted>add to cart</CustomButton>
  </div>
);

export default withRouter(CollectionItem);
