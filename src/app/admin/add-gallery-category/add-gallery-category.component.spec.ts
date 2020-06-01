import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGalleryCategoryComponent } from './add-gallery-category.component';

describe('AddGalleryCategoryComponent', () => {
  let component: AddGalleryCategoryComponent;
  let fixture: ComponentFixture<AddGalleryCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGalleryCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
