import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAccueilComponent } from './text-accueil.component';

describe('TextAccueilComponent', () => {
  let component: TextAccueilComponent;
  let fixture: ComponentFixture<TextAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
