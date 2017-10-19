import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Gnome } from '../Gnome';
import { GnomeSearchCriteria } from '../GnomeSearchCriteria';
import { GetGnomesService } from '../get-gnomes.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css'],
})
export class GnomeListComponent implements OnInit {

	gnomeSearchCriteria: GnomeSearchCriteria;
	gnomes: Gnome[];

	constructor(
		private gnomesService: GetGnomesService,
		private route: ActivatedRoute
	) { }

  ngOnInit() {
		this.route.queryParams
		.subscribe(params => {
			const profession = params['profession'];
			this.gnomeSearchCriteria = new GnomeSearchCriteria();
			this.gnomeSearchCriteria.profession = profession;
		})

		this.gnomesService.getGnomes()
		.subscribe(gnomes => this.gnomes = gnomes);

  }

}
