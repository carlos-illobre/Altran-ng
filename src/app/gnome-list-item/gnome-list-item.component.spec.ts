import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeListItemComponent } from './gnome-list-item.component';

describe('GnomeListItemComponent', () => {
  let component: GnomeListItemComponent;
  let fixture: ComponentFixture<GnomeListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
