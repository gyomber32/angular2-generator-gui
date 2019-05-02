import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'scheduled-generation-dialog',
    templateUrl: 'scheduled-generation-dialog.component.html',
})
export class ScheduledGenerationDialog {

    public type: string;
    public time: Date;

    public daysOfWeek = new Array();

    constructor(public dialogRef: MatDialogRef<ScheduledGenerationDialog>) { }

    onNoClick(): void {
        this.type = null;
        this.daysOfWeek = null;
        this.time = null;
        this.dialogRef.close();
    }

    change(event: any): void {
        this.type = event.value;
        console.log(this.type);
    }

    addOrRemoveDay(event: any) {
        if (!this.daysOfWeek.includes(event.source.value)) {
            this.daysOfWeek.push(event.source.value);
        } else {
            const index = this.daysOfWeek.indexOf(event.source.value);
            this.daysOfWeek.splice(index, 1);
        }
        this.daysOfWeek.sort();
    }

    onCancel(): void {
        this.type = null;
        this.daysOfWeek = null;
        this.time = null;
        this.dialogRef.close(null);
    }

    onSet(): void {
        if (this.type === undefined) {
            alert('Beállítás előtt kérem válasszon generálás típust!');
        } else {
            if (this.type === 'hourly') {
                this.dialogRef.close([this.type]);
            }
            if (this.type === 'daily') {
                if (this.time === undefined) {
                    alert('Beállítás előtt kérem válasszon időpontot!');
                } else {
                    const time = this.getHoursAndMinutes(this.time);
                    this.dialogRef.close([this.type, time]);
                }
            }
            if (this.type === 'weekly') {
                if (this.daysOfWeek === undefined || this.time === undefined) {
                    alert('Beállítás előtt kérem válasszon dátumot és időpontot!');
                } else {
                    const time = this.getHoursAndMinutes(this.time);
                    this.dialogRef.close([this.type, this.daysOfWeek, time]);
                }
            }
        }
    }

    getHoursAndMinutes(date: Date): string {
        const hours = date.getHours();
        const minutes = date.getMinutes();

        return hours + ':' + minutes;
    }

}
