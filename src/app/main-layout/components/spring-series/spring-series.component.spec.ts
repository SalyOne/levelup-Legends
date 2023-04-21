import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSeriesComponent } from './spring-series.component';

describe('SpringSeriesComponent', () => {
  let component: SpringSeriesComponent;
  let fixture: ComponentFixture<SpringSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
