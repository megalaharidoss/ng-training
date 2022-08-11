import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTypesComponent } from './pipes-types.component';

describe('PipesTypesComponent', () => {
  let component: PipesTypesComponent;
  let fixture: ComponentFixture<PipesTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
