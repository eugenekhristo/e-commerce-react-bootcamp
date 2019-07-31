import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">shop now</p>
    </div>
  </div>
);

export default MenuItem;
