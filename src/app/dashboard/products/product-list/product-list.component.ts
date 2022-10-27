import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@sharedModels';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'price', 'delete'];

    @Input()
    productsList: Product[];

    @Output()
    productToDelete = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    deleteProduct(productId: string): void {
        this.productToDelete.emit(productId);
    }

}
