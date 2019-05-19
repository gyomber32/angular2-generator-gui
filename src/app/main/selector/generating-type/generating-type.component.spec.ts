import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingTypeComponent } from './generating-type.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule, MatCheckboxModule, MatDialogModule } from '@angular/material';

import { Config } from '../../../shared/config';

describe('GeneratingTypeComponent', () => {
  let component: GeneratingTypeComponent;
  let fixture: ComponentFixture<GeneratingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratingTypeComponent],
      imports: [BrowserAnimationsModule, NoopAnimationsModule, MatDialogModule, MatRadioModule, MatCheckboxModule],
      providers: [Config]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(GeneratingTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
