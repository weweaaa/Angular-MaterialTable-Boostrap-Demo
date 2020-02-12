import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFilterComponent } from './date-picker-filter.component';

describe('DatePickerFilterComponent', () => {
  let component: DatePickerFilterComponent;
  let fixture: ComponentFixture<DatePickerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
