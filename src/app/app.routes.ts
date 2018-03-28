import { Routes, RouterModule } from '@angular/router';

import { GeneratingTypeComponent } from './main/generating-type/generating-type.component';
import { UploadTypeComponent } from './main/upload-type/upload-type.component';
import { MasterPageComponent } from './main/master-page/master-page.component';

const appRoutes: Routes = [
    { path: 'master-page', component: MasterPageComponent },
    { path: '', component: MasterPageComponent },
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);