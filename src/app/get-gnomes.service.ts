import { Injectable } from '@angular/core';

import { Gnome } from './Gnome';

import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGnomesService {

  constructor(private http: Http) { }

	getGnomes(): Observable<Gnome[]> {
		return this.http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
		.map(response => response.json())
		.map(json => json.Brastlewark)
		.map(gnomes => {
			const map = gnomes.reduce((prev, gnome) => {
				prev[gnome.name] = gnome;
				return prev;
			}, {});
			return gnomes.map(gnome => {
				gnome.friends = gnome.friends.map(name => map[name]);
				return gnome;
			});
		})
	}

	getGnome(id:number): Observable<Gnome> {
		return this.getGnomes()
		.map(gnomes => gnomes.find(gnome => gnome.id === id));
	}
}
