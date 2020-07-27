import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCoverComponent } from './recipe-cover.component';

describe('RecipeCoverComponent', () => {
  let component: RecipeCoverComponent;
  let fixture: ComponentFixture<RecipeCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
