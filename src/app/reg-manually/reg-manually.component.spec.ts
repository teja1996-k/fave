import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegManuallyComponent } from './reg-manually.component';

describe('RegManuallyComponent', () => {
  let component: RegManuallyComponent;
  let fixture: ComponentFixture<RegManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
