import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { GeneratingTypeComponent } from './main/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/upload-type/upload-type.component';
import { MasterPageComponent } from './main/master-page/master-page.component';
import { UploadTableComponent } from './main/upload-table/upload-table.component';
import { WizardComponent } from './main/wizard/wizard.component';

import { HttpClientModule } from '@angular/common/http';

/* Material module */
import { AppMaterialModule } from './app.material.module';

/* Routing modules */
import { routing } from './app.routes';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
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
    HttpClientModule
  ],
  providers: [ MasterPageComponent, GeneratingTypeComponent, UploadTableComponent, UploadTypeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
