import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

    @Output()
    deletionConfirmed = new EventEmitter<boolean>();

    constructor(
        private dialogRef: MatDialogRef<ConfirmationDialogComponent>
    ) { }

    ngOnInit(): void {
    }

    confirmDeletion(): void {
        this.dialogRef.close(true);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

}
