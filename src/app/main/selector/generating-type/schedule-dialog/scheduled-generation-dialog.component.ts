import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { OnInit } from '@angular/core';

@Component({
    selector: 'scheduled-generation-dialog',
    templateUrl: 'scheduled-generation-dialog.component.html',
    styleUrls: ['./scheduled-generation-dialog.component.scss']
})
export class ScheduledGenerationDialog implements OnInit {

    public now: Date;
    public dateAndTime: Date;

    constructor(public dialogRef: MatDialogRef<ScheduledGenerationDialog>) { }

    public onNoClick(): void {
        this.dateAndTime = null;
        this.dialogRef.close(null);
    }

    public onCancel(): void {
        this.dateAndTime = null;
        this.dialogRef.close(null);
    }

    public onSet(): void {
        if (this.dateAndTime === undefined) {
            alert('Beállítás előtt kérem válasszon dátumot és időt!');
        } else {
            const dateAndTime = this.dateToString(this.dateAndTime);
            this.dialogRef.close(dateAndTime);
        }
    }

    public dateToString(date: Date): string {
        const yyyy = date.getFullYear();
        let mm: string;
        let dd: string;
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

    public minDateTime(): Date {
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
