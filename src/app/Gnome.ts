export class Gnome {
	id: number;
	name: string;
	thumbnail: string;
	age: number;
 	weight: number;
	height: number;
 	hair_color: string;
 	professions: string[];
	friends: any[];

	constructor(id:number) {
		this.id = id;
		this.professions = [];
		this.friends = [];
	}

}
