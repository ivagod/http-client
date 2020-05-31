import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeroyDetailsComponent } from './categeroy-details.component';

describe('CategeroyDetailsComponent', () => {
  let component: CategeroyDetailsComponent;
  let fixture: ComponentFixture<CategeroyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategeroyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeroyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
