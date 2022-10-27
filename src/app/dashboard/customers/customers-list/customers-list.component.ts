import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Customer, Product } from '@sharedModels';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, OnChanges {

    @Input()
    customersList: Customer[];

    displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'purchasedProductsIds'];
    parsedCustomersList: Customer[];

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes?.customersList?.currentValue) {
            this.parsedCustomersList = changes?.customersList?.currentValue.map((customer: Customer) => {
                return {
                    ...customer,
                    purchasedProductsIds: customer.purchasedProducts.map((product: Product) => product.id)
                }
            });
        }
    }

}
