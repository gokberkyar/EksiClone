import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPartComponent } from './left-part.component';

describe('LeftPartComponent', () => {
  let component: LeftPartComponent;
  let fixture: ComponentFixture<LeftPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
