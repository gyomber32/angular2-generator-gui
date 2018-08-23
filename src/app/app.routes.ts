import { Routes, RouterModule } from '@angular/router';

import { GeneratingTypeComponent } from './main/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/upload-type/upload-type.component';
import { MasterPageComponent } from './main/master-page/master-page.component';
import { UploadTableComponent } from './main/upload-table/upload-table.component';
import { WizardComponent } from './main/wizard/wizard.component';

const appRoutes: Routes = [
    { path: 'master-page', component: MasterPageComponent },
    { path: 'upload-table', component: UploadTableComponent },
    { path: 'wizard', component: WizardComponent },
    { path: '', component: MasterPageComponent },
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);