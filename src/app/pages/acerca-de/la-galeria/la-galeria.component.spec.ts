import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGaleriaComponent } from './la-galeria.component';

describe('LaGaleriaComponent', () => {
  let component: LaGaleriaComponent;
  let fixture: ComponentFixture<LaGaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
