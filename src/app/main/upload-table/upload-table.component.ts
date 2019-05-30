import { Component, OnInit, ViewChild, Injectable, forwardRef, Input, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';

import { Router } from '@angular/router';

import { Socket } from 'ngx-socket-io';

import { Patient } from '../../shared/patient.interface';

const patients: Patient[] = [];

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.scss'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: forwardRef(() => MatPaginatorIntlUnique)
  }]
})

export class UploadTableComponent implements OnInit, AfterViewInit {

  @Input() patient: Patient;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private socket: Socket) {
    this.socket.fromEvent('data').subscribe((patient: Patient) => {
      if (patient !== undefined) {
        patients.push(patient);
        this.paginator.length += 1;
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  public dataSource = new MatTableDataSource(patients);
  public displayedColumns = [
    'gender',
    'age',
    'height',
    'weight',
    'bloodPressure',
    'bloodGlucose',
    'bloodOxygen',
    'tobaccoUse',
    'lungSound',
    'outcome'
  ];

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public navigate(): void {
    this.router.navigate(['/selector']);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

@Injectable()
export class MatPaginatorIntlUnique extends MatPaginatorIntl {
  itemsPerPageLabel = 'Oldalanként: ';
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return `0 a ${length} -ból/ből`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} a ${length} -ból/ből`;
  }
}
