import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDashboardComponent } from './creation-dashboard.component';

describe('CreationDashboardComponent', () => {
  let component: CreationDashboardComponent;
  let fixture: ComponentFixture<CreationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
