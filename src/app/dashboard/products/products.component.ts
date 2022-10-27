import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductActions } from '@store/actions';
import { State } from '@store/reducers';
import { Observable } from 'rxjs';
import { Product } from '@sharedModels';
import { ProductSelectors } from '@store/selectors';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ProductNewComponent } from './product-new/product-new.component';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products$: Observable<Product[]>;
    gridView: boolean = true;

    constructor(
        private store: Store<State>,
        private dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.store.dispatch(ProductActions.getProducts());
        this.products$ = this.store.pipe(select(ProductSelectors.selectAllProducts));
    }

    createProduct(): void {
        const dialogRef = this.dialog.open(ProductNewComponent, {
            width: '560px',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(response => {
            if (response) this.store.dispatch(ProductActions.createProduct({ product: response }));
        }); 
    }

    deleteProduct(productId: string): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe(response => {
            if (response) this.store.dispatch(ProductActions.deleteProduct({ productId }));
        }); 
    }

}
