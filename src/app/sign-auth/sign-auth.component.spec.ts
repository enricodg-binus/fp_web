import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignAuthComponent } from './sign-auth.component';

describe('SignAuthComponent', () => {
  let component: SignAuthComponent;
  let fixture: ComponentFixture<SignAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
