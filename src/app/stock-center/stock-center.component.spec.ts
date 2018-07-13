import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCenterComponent } from './stock-center.component';

describe('StockCenterComponent', () => {
  let component: StockCenterComponent;
  let fixture: ComponentFixture<StockCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
