import { combineReducers } from '@ngrx/store';
import * as CustomerReducers from './customer.reducer';
import * as ProductReducers from './product.reducer';

export {
    CustomerReducers,
    ProductReducers
}

export interface DashboardState {
    products: ProductReducers.ProductState,
    customers: CustomerReducers.CustomerState
}

export interface State {
    dashboard: DashboardState
}

export const reducers = {
    products: ProductReducers.ProductsReducer,
    customers: CustomerReducers.CustomerReducer
}