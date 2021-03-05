import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerAddFormComponent } from './passenger-add-form.component';

describe('PassengerAddFormComponent', () => {
  let component: PassengerAddFormComponent;
  let fixture: ComponentFixture<PassengerAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
