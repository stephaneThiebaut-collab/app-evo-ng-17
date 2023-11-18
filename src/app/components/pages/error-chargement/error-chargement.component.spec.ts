import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorChargementComponent } from './error-chargement.component';

describe('ErrorChargementComponent', () => {
  let component: ErrorChargementComponent;
  let fixture: ComponentFixture<ErrorChargementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorChargementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorChargementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
