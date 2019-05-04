import { Routes, RouterModule } from '@angular/router';

import { SelectorComponent } from './main/selector/selector.component';
import { WizardComponent } from './main/wizard/wizard.component';
import { UploadTableComponent } from './main/upload-table/upload-table.component';

const appRoutes: Routes = [
    { path: 'selector', component: SelectorComponent },
    { path: 'wizard', component: WizardComponent },
    { path: 'upload', component: UploadTableComponent },
    { path: '', component: SelectorComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
