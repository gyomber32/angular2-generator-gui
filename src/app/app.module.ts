import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/* Services */
import { GenderService } from './utils/gender.service';
import { AgeService } from './utils/age.service';
import { HeightService } from './utils/height.service';
import { WeightService } from './utils/weight.service';
import { SystolicBloodPressureService } from './utils/systolic-blood-pressure.service';
import { DiastolicBloodPressureService } from './utils/diastolic-blood-pressure.service';
import { BloodGlucoseService } from './utils/blood-glucose.service';
import { BloodOxygenService } from './utils/blood-oxygen.service';
import { TobaccoUseService } from './utils/tobacco-use.service';
import { LeftLowerLungService } from './utils/left-lower-lung.service';
import { LeftUpperLungService } from './utils/left-upper-lung.service';
import { RightLowerLungService } from './utils/right-lower-lung.service';
import { RightUpperLungService } from './utils/right-upper-lung.service';

/* Components */
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
import { SDKBrowserModule } from './shared/sdk';

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
    HttpClientModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [
    GenderService,
    AgeService,
    HeightService,
    WeightService,
    SystolicBloodPressureService,
    DiastolicBloodPressureService,
    BloodGlucoseService,
    BloodOxygenService,
    TobaccoUseService,
    LeftLowerLungService,
    LeftUpperLungService,
    RightLowerLungService,
    RightUpperLungService,
    UploadTypeComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
