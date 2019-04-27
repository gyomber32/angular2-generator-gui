import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from './main/master-page.component';

import { SelectorComponent } from './main/selector/selector.component';
import { GeneratorComponent } from './main/generator/generator.component';

const appRoutes: Routes = [
    { path: 'master-page', component: MasterPageComponent },
    { path: 'selector', component: SelectorComponent },
    { path: 'generator', component: GeneratorComponent },
    { path: '', component: MasterPageComponent },
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);
