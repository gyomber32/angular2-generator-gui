import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { GeneratingTypeComponent } from './main/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/upload-type/upload-type.component';
import { MasterPageComponent } from './main/master-page/master-page.component';

/* Routing modules */
import { routing } from './app.routes';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GeneratingTypeComponent,
    UploadTypeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
