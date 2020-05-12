import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbodyComponent } from './headbody.component';

describe('HeadbodyComponent', () => {
  let component: HeadbodyComponent;
  let fixture: ComponentFixture<HeadbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
