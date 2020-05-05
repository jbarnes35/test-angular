import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestderComponent } from './testder.component';

describe('TestderComponent', () => {
  let component: TestderComponent;
  let fixture: ComponentFixture<TestderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
