import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeSanromanComponent } from './cafe-sanroman.component';

describe('CafeSanromanComponent', () => {
  let component: CafeSanromanComponent;
  let fixture: ComponentFixture<CafeSanromanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeSanromanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeSanromanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
