import { createAction, props } from '@ngrx/store';
import { Customer } from '@sharedModels';

export const getCustomers = createAction(
    '[Customers] Get all customers'
);

export const storeCustomers = createAction(
    '[Customers] Store customers',
    props<{ payload: Customer[]; }>()
);

export const getCustomerById = createAction(
    '[Customers] Get customer by Id',
    props<{ customerId: string; }>()
);