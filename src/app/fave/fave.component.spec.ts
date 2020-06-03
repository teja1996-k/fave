import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveComponent } from './fave.component';

describe('FaveComponent', () => {
  let component: FaveComponent;
  let fixture: ComponentFixture<FaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
