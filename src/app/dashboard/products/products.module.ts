/** Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Shared module */
import { SharedModule } from '../../shared/shared.module';

/** Feature components */
import { ProductsComponent } from './products.component';

/** Components */
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';

/** Routes */
const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    }
]

@NgModule({
    declarations: [
        ProductsComponent,
        ProductGridComponent,
        ProductListComponent,
        ProductNewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ProductsModule { }
