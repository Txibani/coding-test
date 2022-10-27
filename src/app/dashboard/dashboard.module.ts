/** Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/** Shared module */
import { SharedModule } from '../shared/shared.module';

/** Store */
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/** Routes */
const routes: Routes = [
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                redirectTo: 'products',
                pathMatch: 'full'
            },
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'customers',
                loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            }
        ]
    }
]

/** Store */
import { CustomerEffects, ProductEffects } from '@store/effects';
import { reducers } from '@store/reducers';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
        StoreModule.forFeature('dashboard', reducers),
        EffectsModule.forFeature([
            CustomerEffects,
            ProductEffects
        ]),
        SharedModule
    ]
})
export class DashboardModule { }
