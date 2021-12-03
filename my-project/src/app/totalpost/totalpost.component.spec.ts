import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalpostComponent } from './totalpost.component';

describe('TotalpostComponent', () => {
  let component: TotalpostComponent;
  let fixture: ComponentFixture<TotalpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
