import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDdComponent } from './category-dd.component';

describe('CategoryDdComponent', () => {
  let component: CategoryDdComponent;
  let fixture: ComponentFixture<CategoryDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
