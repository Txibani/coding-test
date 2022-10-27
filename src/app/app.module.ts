/** Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/** Material modules */
import { MaterialModule } from './shared/material/material.module';

/** Feature modules */
import { DashboardModule } from './dashboard/dashboard.module';

/** Feature components */
import { AppComponent } from './app.component';

/** Routes */
const routes: Routes = [
    {
        path: '**',
        redirectTo: '/dashboard/products'
    }
]

/** i18n */
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'app/assets/i18n/', '.json');
}

/** Store */
import { devStoreModule } from '../environments/environment';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        TranslateModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        devStoreModule,
        MaterialModule,
        DashboardModule
    ],
    providers: [Store],
    bootstrap: [AppComponent]
})
export class AppModule { }
