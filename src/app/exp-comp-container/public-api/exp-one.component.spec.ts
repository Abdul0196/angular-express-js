import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpOneComponent } from './exp-one.component';

describe('ExpOneComponent', () => {
  let component: ExpOneComponent;
  let fixture: ComponentFixture<ExpOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExpOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
