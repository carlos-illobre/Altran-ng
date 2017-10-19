import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeSearchComponent } from './gnome-search.component';

describe('GnomeSearchComponent', () => {
  let component: GnomeSearchComponent;
  let fixture: ComponentFixture<GnomeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
