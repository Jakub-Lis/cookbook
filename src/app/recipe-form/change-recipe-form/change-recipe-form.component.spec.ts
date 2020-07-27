import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRecipeFormComponent } from './change-recipe-form.component';

describe('ChangeRecipeFormComponent', () => {
  let component: ChangeRecipeFormComponent;
  let fixture: ComponentFixture<ChangeRecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRecipeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
