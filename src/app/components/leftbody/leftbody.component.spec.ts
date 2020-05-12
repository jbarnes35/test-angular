import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftbodyComponent } from './leftbody.component';

describe('LeftbodyComponent', () => {
  let component: LeftbodyComponent;
  let fixture: ComponentFixture<LeftbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
