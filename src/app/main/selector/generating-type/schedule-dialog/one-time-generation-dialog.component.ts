import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'one-time-generation-dialog',
    templateUrl: 'one-time-generation-dialog.component.html',
    styleUrls: ['./one-time-generation-dialog.component.scss']
})
export class OneTimeGenerationDialog implements OnInit {

    public now: Date;
    private dateTime: Date;

    constructor(public dialogRef: MatDialogRef<OneTimeGenerationDialog>) { }

    onNoClick(): void {
        this.dateTime = null;
        this.dialogRef.close(null);
    }

    onCancel(): void {
        this.dateTime = null;
        this.dialogRef.close(null);
    }

    onSet(): void {
        if (this.dateTime === undefined) {
            alert('Beállítás előtt kérem válasszon dátumot és időt!');
        } else {
            const dateTime = this.dateToString(this.dateTime);
            this.dialogRef.close(dateTime);
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
