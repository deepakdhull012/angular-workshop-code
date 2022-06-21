import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemoContainerComponent } from './form-demo-container.component';

describe('FormDemoContainerComponent', () => {
  let component: FormDemoContainerComponent;
  let fixture: ComponentFixture<FormDemoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDemoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
