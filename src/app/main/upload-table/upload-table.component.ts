import { Component, OnInit, ViewChild, Injectable, forwardRef, Input, OnChanges, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatPaginatorIntl } from '@angular/material';

import { Router } from '@angular/router';

import { Socket } from 'ngx-socket-io';

import { Patient } from '../../shared/patient.interface';
import { CommonService } from '../../services/common.service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.scss'],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: forwardRef(() => MatPaginatorIntlUnique)
  }]
})

export class UploadTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() patient: Patient;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private websocketService: WebsocketService, private socket: Socket) { }

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
    'outcome'];

  public applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public navigate(): void {
    this.router.navigate(['/selector']);
  }

  ngOnInit() {
    /* Once you have to call it */
    console.log('onInit()');
    this.socket.fromEvent('data').subscribe((patient: Patient) => {
      console.log(patient);
      if (patient !== undefined) {
        patients.push(patient);
        this.paginator.length += 1;
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  ngOnChanges() {
    console.log('onChanges()');
    this.socket.fromEvent('data').subscribe((patient: Patient) => {
      console.log(patient);
      if (patient !== undefined) {
        patients.push(patient);
        this.paginator.length += 1;
        this.dataSource._updateChangeSubscription();
      }
    });
    /*this.websocketService.castPatient.subscribe((patient: Patient) => {
      console.log(patient);
      patients.push(patient);
      this.paginator.length += 1;
      this.dataSource._updateChangeSubscription();
    });*/
  }

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

const patients: Patient[] = [
  /*{
    gender: 'Nő',
    age: 25,
    height: 175,
    weight: 65,
    bloodPressure: '124 / 78',
    bloodGlucose: 7.2,
    bloodOxygen: 97,
    tobaccoUse: 'Never used',
    lungSound: 'Clear',
    outcome: 'Sikeres'
  },
  {
    gender: 'Férfi',
    age: 46,
    height: 200,
    weight: 110,
    bloodGlucose: 6.8,
    bloodOxygen: 97,
    tobaccoUse: 'Never used',
    outcome: 'Sikeres'
  },
  {
    gender: 'Nő',
    age: 28,
    height: 172,
    bloodPressure: '112 / 68',
    bloodGlucose: 5.3,
    bloodOxygen: 98,
    tobaccoUse: 'Never used',
    lungSound: 'Clear',
    outcome: 'Sikeres'
  },
  {
    gender: 'Férfi',
    height: 190,
    weight: 96,
    bloodPressure: '136 / 84',
    bloodGlucose: 6.8,
    bloodOxygen: 97,
    lungSound: 'Coarse',
    outcome: 'Sikertelen'
  },
  {
    gender: 'Nő',
    age: 29,
    height: 163,
    weight: 57,
    bloodPressure: '186 / 98',
    bloodGlucose: 8.2,
    bloodOxygen: 96,
    tobaccoUse: 'Never used',
    lungSound: 'Clear',
    outcome: 'Sikeres'
  },
  {
    gender: 'Nő',
    age: 29,
    weight: 57,
    bloodPressure: '186 / 98',
    bloodGlucose: 8.2,
    tobaccoUse: 'Never used',
    lungSound: 'Clear',
    outcome: 'Sikertelen'
  }*/
];
