import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Gnome } from '../Gnome';
import { GetGnomesService } from '../get-gnomes.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.css'],
})
export class GnomeDetailComponent implements OnInit {

	@Input() gnome:Gnome;

  constructor(
		private gnomesService:GetGnomesService,
		private route:ActivatedRoute
	) { }

  ngOnInit() {
		this.route.paramMap
		.switchMap((params:ParamMap) => {
			const id = +params.get('id');
			this.gnome = new Gnome(id);
			return this.gnomesService.getGnome(id);
		})
		.subscribe(gnome => this.gnome = gnome);
  }

}
