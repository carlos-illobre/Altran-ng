import { Component, OnInit, Input } from '@angular/core';

import { GnomeSearchCriteria } from '../GnomeSearchCriteria'

@Component({
  selector: 'app-gnome-search',
  templateUrl: './gnome-search.component.html',
  styleUrls: ['./gnome-search.component.css']
})
export class GnomeSearchComponent implements OnInit {

	@Input() searchCriteria: GnomeSearchCriteria;

  constructor() { }

  ngOnInit() {
  }

}
