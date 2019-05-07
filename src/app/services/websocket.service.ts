import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Socket } from 'ngx-socket-io';

import { Config } from '../shared/config';
import { Patient } from '../shared/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  private patient = new BehaviorSubject<Patient>(null);

  castPatient = this.patient.asObservable();

  public sendToServer(config: Config) {
    this.socket.emit('config', config);
  }

  public getFromServer() {
    this.socket.fromEvent('data').subscribe((patient: Patient) => {
      console.log(patient);
      this.patient.next(patient);
    });
  }

}
