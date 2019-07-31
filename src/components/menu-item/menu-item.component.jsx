import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`menu-item ${size}`}
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">shop now</p>
    </div>
  </div>
);

export default MenuItem;
