/* import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { UploadTableComponent } from './upload-table.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';

const SOCKET_CONFIG_TOKEN = new InjectionToken<SocketIoConfig>('__SOCKET_IO_CONFIG__');

describe('UploadTableComponent', () => {
  let component: UploadTableComponent;
  let fixture: ComponentFixture<UploadTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadTableComponent],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        RouterTestingModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        SocketIoModule,
      ],
      providers: [
        {
          provide: WrappedSocket,
          deps: [SOCKET_CONFIG_TOKEN]
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */