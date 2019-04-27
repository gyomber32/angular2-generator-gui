import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor(private socket: Socket) { }

  public sendToServer(config: any) {
    this.socket.emit('config', config);
  }

  public getFromServer(): any {
    this.socket.fromEvent('data').subscribe((data) => {
      console.log(data);
    });
  }

}
