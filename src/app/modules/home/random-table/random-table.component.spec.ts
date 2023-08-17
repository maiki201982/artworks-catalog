import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTableComponent } from './random-table.component';

describe('RandomTableComponent', () => {
  let component: RandomTableComponent;
  let fixture: ComponentFixture<RandomTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomTableComponent]
    });
    fixture = TestBed.createComponent(RandomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
