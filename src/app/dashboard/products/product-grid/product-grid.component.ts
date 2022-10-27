import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '@sharedModels';

@Component({
    selector: 'app-product-grid',
    templateUrl: './product-grid.component.html',
    styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

    @Input()
    productsList: Product[];

    @Output()
    productToDelete = new EventEmitter<string>();

    colsBreakpoint: number;
    lowBreakpoint: number = 1;
    highBreakpoint: number;

    constructor() { }

    ngOnInit(): void {
        this.colsBreakpoint = (window.innerWidth <= 1300) ? 2 : 3;
        this.highBreakpoint = (window.innerWidth <= 758) ? 1 : 2;
    }

    onResize(event: any) {
        this.colsBreakpoint = (window.innerWidth <= 1300) ? 2 : 3;
        this.highBreakpoint = (window.innerWidth <= 758) ? 1 : 2;
    }

    deleteProduct(productId: string): void {
        this.productToDelete.emit(productId);
    }

}
