import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabPage } from './sub-tab.page';

describe('SubTabPage', () => {
  let component: SubTabPage;
  let fixture: ComponentFixture<SubTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
