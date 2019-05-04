import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

/* Services */
import { CommonService } from './services/common.service';
import { WebsocketService } from './services/websocket.service';

import { Config } from './shared/config.interface';

/* Components */
import { MasterPageComponent } from './main/master-page.component';

import { SelectorComponent } from './main/selector/selector.component';

import { GeneratingTypeComponent } from './main/selector/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/selector/upload-type/upload-type.component';
import { UploadTableComponent } from './main/upload-table/upload-table.component';
import { WizardComponent } from './main/wizard/wizard.component';

import { ScheduledGenerationDialog } from './main/selector/generating-type/schedule-dialog/scheduled-generation-dialog.component';

/* Material module */
import { AppMaterialModule } from './app.material.module';
/* Timepicker module */
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


/* Routing modules */
import { routing } from './app.routes';
import { Routes, RouterModule } from '@angular/router';
import { SDKBrowserModule } from './shared/sdk';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    SelectorComponent,
    GeneratingTypeComponent,
    UploadTypeComponent,
    UploadTableComponent,
    WizardComponent,
    ScheduledGenerationDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AppMaterialModule,
    BrowserModule,
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    SocketIoModule.forRoot(config),
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    UploadTypeComponent,
    Config,
    CommonService,
    WebsocketService
  ],
  entryComponents: [
    ScheduledGenerationDialog
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
