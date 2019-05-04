import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Config } from '../shared/config';
import { Patient } from '../shared/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  public sendToServer(config: Config) {
    this.socket.emit('config', config);
  }

  public getFromServer() {
    this.socket.fromEvent('data').subscribe((patient: Patient) => {
      console.log(patient);
    });
  }

}
