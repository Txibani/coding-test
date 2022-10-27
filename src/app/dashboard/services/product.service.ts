import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '@sharedModels';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '@store/reducers';
import { ProductSelectors } from '@store/selectors';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    storeProducts$: Observable<Product[]>;

    constructor(
        private http: HttpClient,
        private store: Store<State>
    ) {
        this.storeProducts$ = this.store.pipe(select(ProductSelectors.selectAllProducts));
    }

    getProducts(): Observable<Product[]> {
        const url = '';
        // return this.http.get<Product[]>(
        //     url
        // );
        return of(
            [

                {
                    id: '1',
                    name: 'Tshirt',
                    description: 'White tshirt',
                    price: 10
                },
                {
                    id: '2',
                    name: 'Blouse',
                    description: 'Yellow blouse',
                    price: 15
                },
                {
                    id: '3',
                    name: 'Shoes',
                    description: 'Size 44 shoes',
                    price: 30
                },
                {
                    id: '4',
                    name: 'Cap',
                    description: 'Small size cap',
                    price: 5
                },
                {
                    id: '5',
                    name: 'Tie',
                    description: 'Tie with dots',
                    price: 14
                },
            ]
        );
    }

    deleteProduct(productId: string): Observable<Product[]> {
        const url = '';
        // return this.http.delete<Product[]>(
        //     url
        // );
        let productList: Product[] = [];
        this.storeProducts$.subscribe(availableProducts => {
            productList = availableProducts.filter(product => product.id !== productId);
        });
        return of(productList);
    }

    createProduct(product: Product): Observable<Product> {
        const url = '';
        // return this.http.post<Product>(
        //     url,
        //     JSON.stringify(product)
        // );
        let productResponse = { ...product };
        productResponse['id'] = Math.floor(Math.random() * 110).toString();
        return of(productResponse);
    }

}