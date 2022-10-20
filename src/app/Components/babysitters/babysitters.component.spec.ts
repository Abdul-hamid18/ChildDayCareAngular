import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysittersComponent } from './babysitters.component';

describe('BabysittersComponent', () => {
  let component: BabysittersComponent;
  let fixture: ComponentFixture<BabysittersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysittersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysittersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
