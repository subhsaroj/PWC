import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCalculationComponent } from './about-calculation.component';

describe('FormInputComponent', () => {
  let component: AboutCalculationComponent;
  let fixture: ComponentFixture<AboutCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});