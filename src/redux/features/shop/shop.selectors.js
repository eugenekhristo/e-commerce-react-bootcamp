import { createSelector } from 'reselect';

const selectShop = state => state.shop;
const selectRawShopCollections = state => state.shop.collections;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => Object.values(shop.collections)
);

export const selectShopCollectionByRouteParam = routeParam =>
  createSelector(
    [selectRawShopCollections],
    collections => collections[routeParam]
  );
