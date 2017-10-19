import { Component, OnInit, Input } from '@angular/core';

import { Gnome } from '../Gnome';

@Component({
  selector: 'app-gnome-list-item',
  templateUrl: './gnome-list-item.component.html',
  styleUrls: ['./gnome-list-item.component.css']
})
export class GnomeListItemComponent implements OnInit {

	@Input() gnome: Gnome;

  constructor() { }

  ngOnInit() {
  }

}
