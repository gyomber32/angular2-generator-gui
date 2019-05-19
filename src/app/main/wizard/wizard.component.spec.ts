import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardComponent } from './wizard.component';

import { EngToHunPipe } from '../../shared/eng-to-hun.pipe';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import {
  MatStepperModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatInputModule
} from '@angular/material';

import { Config } from '../../shared/config';

describe('WizardComponent', () => {
  let component: WizardComponent;
  let fixture: ComponentFixture<WizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardComponent, EngToHunPipe],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule,
        FormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatInputModule
      ],
      providers: [Config]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(WizardComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
