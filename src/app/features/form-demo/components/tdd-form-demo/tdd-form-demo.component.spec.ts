import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TddFormDemoComponent } from './tdd-form-demo.component';

describe('TddFormDemoComponent', () => {
  let component: TddFormDemoComponent;
  let fixture: ComponentFixture<TddFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TddFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TddFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
