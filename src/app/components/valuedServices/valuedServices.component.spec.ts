import { ComponentFixture, TestBed } from '@angular/core/testing';

import { valuedServicesComponent } from './valuedServices.component';

describe('FormInputComponent', () => {
  let component: valuedServicesComponent;
  let fixture: ComponentFixture<valuedServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [valuedServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(valuedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});