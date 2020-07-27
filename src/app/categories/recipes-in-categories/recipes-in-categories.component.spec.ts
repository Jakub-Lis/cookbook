import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesInCategoriesComponent } from './recipes-in-categories.component';

describe('RecipesInCategoriesComponent', () => {
  let component: RecipesInCategoriesComponent;
  let fixture: ComponentFixture<RecipesInCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesInCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesInCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
