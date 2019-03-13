import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTab2Page } from './sub-tab2.page';

describe('SubTab2Page', () => {
  let component: SubTab2Page;
  let fixture: ComponentFixture<SubTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
