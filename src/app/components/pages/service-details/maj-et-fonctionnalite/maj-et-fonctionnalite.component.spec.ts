import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajEtFonctionnaliteComponent } from './maj-et-fonctionnalite.component';

describe('MajEtFonctionnaliteComponent', () => {
  let component: MajEtFonctionnaliteComponent;
  let fixture: ComponentFixture<MajEtFonctionnaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajEtFonctionnaliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MajEtFonctionnaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
