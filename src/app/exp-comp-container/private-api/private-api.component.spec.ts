import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateApiComponent } from './private-api.component';

describe('PrivateApiComponent', () => {
  let component: PrivateApiComponent;
  let fixture: ComponentFixture<PrivateApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PrivateApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
