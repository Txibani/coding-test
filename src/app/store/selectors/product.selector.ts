import { createSelector } from '@ngrx/store';
import * as productReducer from '../reducers';

export const ProductSelectors = (state: productReducer.State) => state.dashboard.products

export const selectAllProducts = createSelector(
    ProductSelectors,
    (state: productReducer.ProductReducers.ProductState) => state.productsList
);