import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'scheduled-generation-dialog',
    templateUrl: 'scheduled-generation-dialog.component.html',
})
export class ScheduledGenerationDialog {

    constructor(public dialogRef: MatDialogRef<ScheduledGenerationDialog>) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
