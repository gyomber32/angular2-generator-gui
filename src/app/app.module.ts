import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

/* Services */
import { WebsocketService } from './services/websocket.service';

/* Components */
import { MasterPageComponent } from './main/master-page.component';

import { SelectorComponent } from './main/selector/selector.component';
import { GeneratorComponent } from './main/generator/generator.component';

import { GeneratingTypeComponent } from './main/selector/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/selector/upload-type/upload-type.component';
import { UploadTableComponent } from './main/generator/upload-table/upload-table.component';
import { WizardComponent } from './main/generator/wizard/wizard.component';

/* Material module */
import { AppMaterialModule } from './app.material.module';

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
    GeneratorComponent,
    GeneratingTypeComponent,
    UploadTypeComponent,
    UploadTableComponent,
    WizardComponent
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
    SocketIoModule.forRoot(config)
  ],
  providers: [
    UploadTypeComponent,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
