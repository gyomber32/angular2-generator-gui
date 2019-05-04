import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'scheduled-generation-dialog',
    templateUrl: 'scheduled-generation-dialog.component.html',
    styleUrls: ['./scheduled-generation-dialog.component.scss']
})
export class ScheduledGenerationDialog implements OnInit {

    public now: Date;
    public dateAndTime: Date;

    constructor(public dialogRef: MatDialogRef<ScheduledGenerationDialog>) { }

    onNoClick(): void {
        this.dateAndTime = null;
        this.dialogRef.close(null);
    }

    onCancel(): void {
        this.dateAndTime = null;
        this.dialogRef.close(null);
    }

    onSet(): void {
        if (this.dateAndTime === undefined) {
            alert('Beállítás előtt kérem válasszon dátumot és időt!');
        } else {
            const dateAndTime = this.dateToString(this.dateAndTime);
            this.dialogRef.close(dateAndTime);
        }
    }

    dateToString(date: Date): string {
        const yyyy = date.getFullYear();
        let mm;
        let dd;
        const hours = date.getHours();
        const minutes = date.getMinutes();
        if ((date.getMonth() + 1) < 10) {
            mm = '0' + (date.getMonth() + 1);
        } else {
            mm = '' + (date.getMonth() + 1);
        }
        if (date.getDate() < 10) {
            dd = '0' + date.getDate();
        } else {
            dd = '' + date.getDate();
        }

        return yyyy + '-' + mm + '-' + dd + '_' + hours + ':' + minutes;
    }

    minDateTime(): Date {
        const now = new Date();
        const YYYY = now.getFullYear();
        const MM = now.getMonth();
        const DD = now.getDate();
        const hh = now.getHours();
        const mm = now.getMinutes() + 15;

        return new Date(YYYY, MM, DD, hh, mm);
    }

    ngOnInit() {
        this.now = this.minDateTime();
    }

}
