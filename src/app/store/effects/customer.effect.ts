import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CustomerActions } from '@store/actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from '@dashboardServices';
import { Customer } from '@sharedModels';
 
@Injectable()
export class CustomerEffects {

    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) {}

    getCustomers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActions.getCustomers),
            switchMap(action => {
                return this.customerService.getCustomers()
                .pipe(
                    map((data: Customer[]) => CustomerActions.storeCustomers({ payload: data }))
                )
            })));


}