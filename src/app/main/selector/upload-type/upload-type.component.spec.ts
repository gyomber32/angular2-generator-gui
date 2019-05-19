import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTypeComponent } from './upload-type.component';

import { MatCheckboxModule } from '@angular/material';

import { Config } from '../../../shared/config';

describe('UploadTypeComponent', () => {
  let component: UploadTypeComponent;
  let fixture: ComponentFixture<UploadTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadTypeComponent],
      imports: [MatCheckboxModule],
      providers: [Config]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
