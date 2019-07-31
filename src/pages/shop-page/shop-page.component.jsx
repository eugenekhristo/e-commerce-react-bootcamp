import React from 'react';
import './shop-page.styles.scss';
import SHOP_COLLECTIONS from './shop-page.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_COLLECTIONS
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...restCollectionProps }) => (
          <CollectionPreview key={id} {...restCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
