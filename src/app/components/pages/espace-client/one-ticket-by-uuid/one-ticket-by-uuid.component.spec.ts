import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTicketByUuidComponent } from './one-ticket-by-uuid.component';

describe('OneTicketByUuidComponent', () => {
  let component: OneTicketByUuidComponent;
  let fixture: ComponentFixture<OneTicketByUuidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneTicketByUuidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneTicketByUuidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
