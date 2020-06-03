import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveBackgroundComponent } from './fave-background.component';

describe('FaveBackgroundComponent', () => {
  let component: FaveBackgroundComponent;
  let fixture: ComponentFixture<FaveBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
