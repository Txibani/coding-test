/** Modules */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

/** Material module */
import { MaterialModule } from '../shared/material/material.module';

/** Components */
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component'

@NgModule({
    declarations: [
        ConfirmationDialogComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        TranslateModule

    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        ConfirmationDialogComponent,
        TranslateModule
    ]
})
export class SharedModule { }
