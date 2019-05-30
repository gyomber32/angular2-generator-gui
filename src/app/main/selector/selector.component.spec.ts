import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { GeneratingTypeComponent } from './generating-type/generating-type.component';
import { UploadTypeComponent } from './upload-type/upload-type.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatStepperModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router } from '@angular/router';

import { Config } from '../../shared/config';
import { WizardComponent } from '../wizard/wizard.component';
import { EngToHunPipe } from '../../shared/eng-to-hun.pipe';
import { tick } from '@angular/core/src/render3';

describe('SelectorComponent', () => {
    let component: SelectorComponent;
    let fixture: ComponentFixture<SelectorComponent>;
    const router = { navigate: jasmine.createSpy('navigate') };
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SelectorComponent,
                GeneratingTypeComponent,
                UploadTypeComponent,
                WizardComponent,
                EngToHunPipe],
            imports: [
                BrowserAnimationsModule,
                NoopAnimationsModule,
                RouterTestingModule.withRoutes([{
                    path: 'wizard',
                    component: WizardComponent
                }
                ]),
                RouterModule,
                FormsModule,
                ReactiveFormsModule,
                MatDialogModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
                MatCardModule,
                MatButtonModule,
                MatRadioModule,
                MatCheckboxModule,
                MatStepperModule,
                MatFormFieldModule,
                MatCheckboxModule,
                MatRadioModule,
                MatButtonModule,
                MatCardModule,
                MatListModule,
                MatInputModule],
            providers: [Config, { provide: Router, useValue: router }]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(SelectorComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('navigate you to /wizard', async(() => {
        router.navigate(['/wizard']);
        expect(router.navigate).toHaveBeenCalledWith(['/wizard']);
    }));
});
