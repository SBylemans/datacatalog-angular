import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacatalogComponent } from './datacatalog.component';

describe('DatacatalogComponent', () => {
  let component: DatacatalogComponent;
  let fixture: ComponentFixture<DatacatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
