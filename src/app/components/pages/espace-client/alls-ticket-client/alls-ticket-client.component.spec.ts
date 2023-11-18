import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsTicketClientComponent } from './alls-ticket-client.component';

describe('AllsTicketClientComponent', () => {
  let component: AllsTicketClientComponent;
  let fixture: ComponentFixture<AllsTicketClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllsTicketClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllsTicketClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
