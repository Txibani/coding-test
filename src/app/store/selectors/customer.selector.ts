import { createSelector } from '@ngrx/store';
import * as customerReducer from '../reducers';

export const CustomerSelectors = (state: customerReducer.State) => state.dashboard.customers

export const selectAllProducts = createSelector(
    CustomerSelectors,
    (state: customerReducer.CustomerReducers.CustomerState) => state.customersList
);