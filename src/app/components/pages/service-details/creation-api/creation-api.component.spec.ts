import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationApiComponent } from './creation-api.component';

describe('CreationApiComponent', () => {
  let component: CreationApiComponent;
  let fixture: ComponentFixture<CreationApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
