import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailsSidebarComponent } from './cocktails-sidebar.component';

describe('CocktailsSidebarComponent', () => {
  let component: CocktailsSidebarComponent;
  let fixture: ComponentFixture<CocktailsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
