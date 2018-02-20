import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacatalogAddComponent } from './datacatalog-add.component';

describe('DatacatalogAddComponent', () => {
  let component: DatacatalogAddComponent;
  let fixture: ComponentFixture<DatacatalogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacatalogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacatalogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
