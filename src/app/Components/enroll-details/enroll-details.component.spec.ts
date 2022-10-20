import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollDetailsComponent } from './enroll-details.component';

describe('EnrollDetailsComponent', () => {
  let component: EnrollDetailsComponent;
  let fixture: ComponentFixture<EnrollDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
