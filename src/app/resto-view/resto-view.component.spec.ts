import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoViewComponent } from './resto-view.component';

describe('RestoViewComponent', () => {
  let component: RestoViewComponent;
  let fixture: ComponentFixture<RestoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
