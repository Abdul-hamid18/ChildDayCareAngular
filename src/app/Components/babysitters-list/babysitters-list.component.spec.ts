import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysittersListComponent } from './babysitters-list.component';

describe('BabysittersListComponent', () => {
  let component: BabysittersListComponent;
  let fixture: ComponentFixture<BabysittersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabysittersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysittersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
