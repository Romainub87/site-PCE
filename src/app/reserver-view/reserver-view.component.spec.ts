import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverViewComponent } from './reserver-view.component';

describe('ReserverViewComponent', () => {
  let component: ReserverViewComponent;
  let fixture: ComponentFixture<ReserverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
