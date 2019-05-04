import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

/* Material module */
import { AppMaterialModule } from './app.material.module';

/* Routing modules */
import { routing } from './app.routes';

/* Components */
import { SelectorComponent } from './main/selector/selector.component';
import { GeneratingTypeComponent } from './main/selector/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/selector/upload-type/upload-type.component';
import { UploadTableComponent } from './main/upload-table/upload-table.component';
import { WizardComponent } from './main/wizard/wizard.component';

/* Dialog components */
import { ScheduledGenerationDialog } from './main/selector/generating-type/schedule-dialog/scheduled-generation-dialog.component';

/* Services */
import { CommonService } from './services/common.service';
import { WebsocketService } from './services/websocket.service';

/* Interfaces, Classes */
import { Config } from './shared/config';

/* Webscoket module */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

/* Timepicker module */
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
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
