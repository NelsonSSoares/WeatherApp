import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomeComponent } from './weather-home.component';

describe('WeatherHomeComponent', () => {
  let component: WeatherHomeComponent;
  let fixture: ComponentFixture<WeatherHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherHomeComponent]
    });
    fixture = TestBed.createComponent(WeatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
