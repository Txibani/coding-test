import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from '@store/actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '@sharedModels';
import { ProductService } from '@dashboardServices';
 
@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}

    getProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProducts),
            switchMap(action => {
                return this.productService.getProducts().pipe(
                        map((data: Product[]) => ProductActions.storeProducts({ payload: data }))
                    )
            })));

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.deleteProduct),
            switchMap(action => {
                return this.productService.deleteProduct(action.productId).pipe(
                        map((data: Product[]) => {
                            return ProductActions.storeProducts({ payload: data });
                        })
                    )
            })));

    createProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.createProduct),
            switchMap(action => {
                return this.productService.createProduct(action.product).pipe(
                        map((data: Product) => ProductActions.storeCreatedProduct({ payload: data }))
                    )
            })));

}