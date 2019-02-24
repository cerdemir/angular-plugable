import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNavigationComponent } from './dynamic-navigation.component';

describe('DynamicNavigationComponent', () => {
  let component: DynamicNavigationComponent;
  let fixture: ComponentFixture<DynamicNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
