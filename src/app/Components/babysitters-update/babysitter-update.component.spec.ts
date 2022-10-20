import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysitterUpdateComponent } from './babysitter-update.component';

describe('BabysitterUpdateComponent', () => {
  let component: BabysitterUpdateComponent;
  let fixture: ComponentFixture<BabysitterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysitterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysitterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
