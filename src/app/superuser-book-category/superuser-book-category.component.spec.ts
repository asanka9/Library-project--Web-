import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserBookCategoryComponent } from './superuser-book-category.component';

describe('SuperuserBookCategoryComponent', () => {
  let component: SuperuserBookCategoryComponent;
  let fixture: ComponentFixture<SuperuserBookCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserBookCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserBookCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
