import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTab1Page } from './sub-tab1.page';

describe('SubTab1Page', () => {
  let component: SubTab1Page;
  let fixture: ComponentFixture<SubTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
