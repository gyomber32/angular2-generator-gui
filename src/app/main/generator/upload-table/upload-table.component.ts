import { Component, OnInit, ViewChild, Injectable, Inject, forwardRef, Input, ChangeDetectorRef, ValueProvider } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';

import { Router } from '@angular/router';

@Component({
  selector: 'upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.css'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: forwardRef(() => MatPaginatorIntlUnique)
  }]
})

export class UploadTableComponent {

  @Input() patient: PatientInterface;

  constructor(private router: Router, private changeDetectorRefs: ChangeDetectorRef) { }

  displayedColumns = ['gender', 'age', 'height', 'weight', 'bloodPressure', 'bloodGlucose', 'bloodOxygen', 'tobaccoUse', 'lungSound'];
  dataSource = new MatTableDataSource(patients);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  navigate() {
    this.router.navigate(['/master-page']);
  }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log("patient in UploadTable: ", this.patient);
    if (this.patient != undefined) {
      patients.push(this.patient);
      this.paginator.length += 1;
      this.dataSource._updateChangeSubscription();
    }

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

@Injectable()
export class MatPaginatorIntlUnique extends MatPaginatorIntl {
  itemsPerPageLabel = 'Oldalanként: ';
  getRangeLabel = (page: number, pageSize: number, length: number) => { if (length == 0 || pageSize == 0) { return `0 a ${length} -ból/ből`; } length = Math.max(length, 0); const startIndex = page * pageSize; const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; return `${startIndex + 1} - ${endIndex} a ${length} -ból/ből`; }
}

export interface PatientInterface {
  gender?: string;
  age?: number;
  height?: number;
  weight?: number;
  bloodPressure?: string;
  bloodGlucose?: number;
  bloodOxygen?: number;
  tobaccoUse?: string;
  lungSound?: string;
}

let patients: PatientInterface[] = [
  { gender: 'Nő', age: 25, height: 175, weight: 65, bloodPressure: '124 / 78', bloodGlucose: 7.2, bloodOxygen: 97, tobaccoUse: 'Never used', lungSound: 'Clear' },
  { gender: 'Férfi', age: 46, height: 200, weight: 110, bloodGlucose: 6.8, bloodOxygen: 97, tobaccoUse: 'Never used' },
  { gender: 'Nő', age: 28, height: 172, bloodPressure: '112 / 68', bloodGlucose: 5.3, bloodOxygen: 98, tobaccoUse: 'Never used', lungSound: 'Clear' },
  { gender: 'Férfi', height: 190, weight: 96, bloodPressure: '136 / 84', bloodGlucose: 6.8, bloodOxygen: 97, lungSound: 'Coarse' },
  { gender: 'Nő', age: 29, height: 163, weight: 57, bloodPressure: '186 / 98', bloodGlucose: 8.2, bloodOxygen: 96, tobaccoUse: 'Never used', lungSound: 'Clear' },
  { gender: 'Nő', age: 29, weight: 57, bloodPressure: '186 / 98', bloodGlucose: 8.2, tobaccoUse: 'Never used', lungSound: 'Clear' }
];
