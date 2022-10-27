/** Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Shared module */
import { SharedModule } from '../../shared/shared.module';

/** Feature components */
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

/** Components */

/** Routes */
const routes: Routes = [
    {
        path: '',
        component: CustomersComponent
    }
]

@NgModule({
    declarations: [
        CustomersComponent,
        CustomersListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CustomersModule { }
