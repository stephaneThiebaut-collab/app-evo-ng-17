import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReforgeAppComponent } from './reforge-app.component';

describe('ReforgeAppComponent', () => {
  let component: ReforgeAppComponent;
  let fixture: ComponentFixture<ReforgeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReforgeAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReforgeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
