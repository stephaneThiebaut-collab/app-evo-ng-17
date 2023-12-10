import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptiSeoComponent } from './opti-seo.component';

describe('OptiSeoComponent', () => {
  let component: OptiSeoComponent;
  let fixture: ComponentFixture<OptiSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptiSeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptiSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
