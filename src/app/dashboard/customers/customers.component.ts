import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CustomerActions } from '@store/actions';
import { Observable } from 'rxjs';
import { State } from '@store/reducers';
import { CustomerSelectors } from '@store/selectors';
import { Customer } from '@sharedModels';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

    customers$: Observable<Customer[]>;

    constructor(
        private store: Store<State>
    ) { }

    ngOnInit(): void {CustomerSelectors
        this.store.dispatch(CustomerActions.getCustomers());
        this.customers$ = this.store.pipe(select(CustomerSelectors.selectAllProducts));
    }

}
