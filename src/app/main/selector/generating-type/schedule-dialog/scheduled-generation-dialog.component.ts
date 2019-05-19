import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-scheduled-generation-dialog',
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
            const dateAndTime = this.dateToDateArray(this.dateAndTime);
            this.dialogRef.close(dateAndTime);
        }
    }

    public dateToDateArray(date: Date): number[] {

        const dateArray = new Array<number>();
        dateArray.push(date.getFullYear());
        dateArray.push(date.getMonth());
        dateArray.push(date.getDate());
        dateArray.push(date.getHours());
        dateArray.push(date.getMinutes());

        return dateArray;
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
