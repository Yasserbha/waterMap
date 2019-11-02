import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMaterialsComponent } from './information-materials.component';

describe('InformationMaterialsComponent', () => {
  let component: InformationMaterialsComponent;
  let fixture: ComponentFixture<InformationMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
