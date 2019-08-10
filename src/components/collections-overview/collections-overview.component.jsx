import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import CollectionPreview from './../collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/features/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <div className="collection-overview">
    {collections.map(({ id, ...restCollectionProps }) => (
      <CollectionPreview key={id} {...restCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
