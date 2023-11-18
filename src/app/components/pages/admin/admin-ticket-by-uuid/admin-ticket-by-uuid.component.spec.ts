import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTicketByUuidComponent } from './admin-ticket-by-uuid.component';

describe('AdminTicketByUuidComponent', () => {
  let component: AdminTicketByUuidComponent;
  let fixture: ComponentFixture<AdminTicketByUuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTicketByUuidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTicketByUuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
