import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingTypeComponent } from './generating-type.component';

describe('GeneratingTypeComponent', () => {
  let component: GeneratingTypeComponent;
  let fixture: ComponentFixture<GeneratingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
