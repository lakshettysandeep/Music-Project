import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryspecialComponent } from './countryspecial.component';

describe('CountryspecialComponent', () => {
  let component: CountryspecialComponent;
  let fixture: ComponentFixture<CountryspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
