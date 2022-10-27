import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '@sharedModels';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {

    constructor(
        private http: HttpClient
    ) { }

    getCustomers(): Observable<Customer[]> {
        const url = '';
        // return this.http.get<Customer[]>(
        //     url
        // );
        return of(
            [
                {
                    id: '1',
                    name: 'John',
                    email: 'johnDoe@gmail.com',
                    purchasedProducts: [
                        {
                            id: '1',
                            name: 'Tshirt',
                            description: 'White tshirt',
                            price: 10
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'Mary',
                    email: 'mary@gmail.com',
                    purchasedProducts: [
                        {
                            id: '2',
                            name: 'Blouse',
                            description: 'Yellow blouse',
                            price: 15
                        }
                    ]
                },
                {
                    id: '2',
                    name: 'Lidia',
                    email: 'lidia@gmail.com',
                    purchasedProducts: [
                        {
                            id: '5',
                            name: 'Tie',
                            description: 'Tie with dots',
                            price: 14
                        }
                    ]
                }
            ]
        )
    }

}