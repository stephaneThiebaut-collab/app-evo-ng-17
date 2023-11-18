import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageTicketComponent } from './admin-page-ticket.component';

describe('AdminPageTicketComponent', () => {
  let component: AdminPageTicketComponent;
  let fixture: ComponentFixture<AdminPageTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPageTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
