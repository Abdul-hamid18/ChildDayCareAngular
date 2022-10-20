import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysittersFormComponent } from './babysitters-form.component';

describe('BabysittersFormComponent', () => {
  let component: BabysittersFormComponent;
  let fixture: ComponentFixture<BabysittersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysittersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysittersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
