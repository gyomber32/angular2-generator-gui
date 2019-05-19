import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { GeneratingTypeComponent } from './generating-type/generating-type.component';
import { UploadTypeComponent } from './upload-type/upload-type.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatButtonModule, MatRadioModule, MatCheckboxModule, MatDialogModule } from '@angular/material';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { Config } from '../../shared/config';

describe('SelectorComponent', () => {
    let component: SelectorComponent;
    let fixture: ComponentFixture<SelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SelectorComponent,
                GeneratingTypeComponent,
                UploadTypeComponent],
            imports: [
                BrowserAnimationsModule,
                NoopAnimationsModule,
                RouterTestingModule,
                RouterModule,
                MatDialogModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
                MatCardModule,
                MatButtonModule,
                MatRadioModule,
                MatCheckboxModule],
            providers: [Config]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(SelectorComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
