import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelerityFeedComponent } from './celerity-feed.component';

describe('CelerityFeedComponent', () => {
  let component: CelerityFeedComponent;
  let fixture: ComponentFixture<CelerityFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelerityFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelerityFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
