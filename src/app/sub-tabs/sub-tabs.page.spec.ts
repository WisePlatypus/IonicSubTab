import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabsPage } from './sub-tabs.page';

describe('SubTabPage', () => {
  let component: SubTabsPage;
  let fixture: ComponentFixture<SubTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
