import React from 'react';
import { connect } from 'react-redux';
import './collection-page.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectShopCollectionByRouteParam } from '../../redux/features/shop/shop.selectors';

const CollectionPage = ({ collection: { title, items } }) => (
  <div className="collection-page">
    <h2 className="title">{title}</h2>
    <div className="items">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollectionByRouteParam(
    ownProps.match.params.collectionId
  )(state)
});

export default connect(mapStateToProps)(CollectionPage);
