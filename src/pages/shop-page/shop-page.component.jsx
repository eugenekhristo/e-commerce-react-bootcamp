import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './shop-page.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/features/shop/shop.selectors';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...restCollectionProps }) => (
      <CollectionPreview key={id} {...restCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(ShopPage);
