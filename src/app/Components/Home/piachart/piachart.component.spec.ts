import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiachartComponent } from './piachart.component';

describe('PiachartComponent', () => {
  let component: PiachartComponent;
  let fixture: ComponentFixture<PiachartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiachartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
