import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

// export const selectCollectionItem = createSelector(
//   [selectCollections],
//   collections => (collections ? collections[collectionUrlparam][key] : null)
//   )

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

export const selectCollectionItem = createSelector(
  [selectCollections],
  (collections) =>
    collections.items
      ? Object.keys(collections.items).map((collection) => collection.items[collection.key])
      : []
);
