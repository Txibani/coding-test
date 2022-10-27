import { ApplicationInitStatus } from '@angular/core';
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '@sharedModels';
import { ProductActions } from '@store/actions';

export interface ProductState {
    productsList: Product[];
}

export const initialState: ProductState = {
    productsList: []
};

export const productReducer = createReducer(

    initialState,

    on(ProductActions.storeProducts, (state, action) => ({
        ...state,
        productsList: action.payload
    })),

    on(ProductActions.storeCreatedProduct, (state, action) => ({
        ...state,
        productsList: [...state.productsList].concat(action.payload)
    }))
)

export function ProductsReducer(state: ProductState | undefined, action: Action): any {
    return productReducer(state, action)
}