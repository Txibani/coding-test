import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '@store/reducers';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {

    newProductForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        price: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.pattern('^[0-9]*$')]),
    });

    constructor(
        private dialogRef: MatDialogRef<ProductNewComponent>,
        private store: Store<State>
    ) { }

    ngOnInit(): void {}

    createProduct(): void {
        if (this.newProductForm.valid) this.dialogRef.close(this.newProductForm.value);
    }

    closeDialog(): void {
        this.dialogRef.close()
    }

}
