import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationAppComponent } from './creation-app.component';

describe('CreationAppComponent', () => {
  let component: CreationAppComponent;
  let fixture: ComponentFixture<CreationAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
