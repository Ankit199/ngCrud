import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardComponent } from './navbard.component';

describe('NavbardComponent', () => {
  let component: NavbardComponent;
  let fixture: ComponentFixture<NavbardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
