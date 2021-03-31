import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesBookComponent } from './recipes-book.component';

describe('RecipesBookComponent', () => {
  let component: RecipesBookComponent;
  let fixture: ComponentFixture<RecipesBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
