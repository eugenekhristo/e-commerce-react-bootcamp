import SHOP_COLLECTIONS from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_COLLECTIONS
};

export default (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};
