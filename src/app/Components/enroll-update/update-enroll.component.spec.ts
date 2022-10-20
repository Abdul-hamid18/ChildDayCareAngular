import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrollComponent } from './update-enroll.component';

describe('UpdateEnrollComponent', () => {
  let component: UpdateEnrollComponent;
  let fixture: ComponentFixture<UpdateEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
