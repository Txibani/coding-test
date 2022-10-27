import { Action, createReducer, on } from '@ngrx/store';
import { Customer } from '@sharedModels';
import { CustomerActions } from '@store/actions';

export interface CustomerState {
    customersList: Customer[];
}

export const initialState: CustomerState = {
    customersList: []
};

export const customerReducer = createReducer(

    initialState,

    on(CustomerActions.storeCustomers, (state, action) => ({
        ...state,
        customersList: action.payload
    }))

)

export function CustomerReducer(state: CustomerState | undefined, action: Action): any {
    return customerReducer(state, action)
}