import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, routeName, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, imageUrl, price }) => (
          <div key={id}>{name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
