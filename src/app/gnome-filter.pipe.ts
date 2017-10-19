import { Pipe, PipeTransform } from '@angular/core';

import { Gnome } from './Gnome';
import { GnomeSearchCriteria } from './GnomeSearchCriteria';

@Pipe({
  name: 'gnomeFilter',
	pure: false
})
export class GnomeFilterPipe implements PipeTransform {

  transform(gnomes: Gnome[], searchCriteria: GnomeSearchCriteria): Gnome[] {
		if (!gnomes) return gnomes;
    return gnomes.filter(gnome =>
			new RegExp(searchCriteria.name, 'gi').test(gnome.name)
			&& (!searchCriteria.ageFrom || gnome.age >= searchCriteria.ageFrom)
			&& (!searchCriteria.ageTo || searchCriteria.ageTo >= gnome.age)
			&& (!searchCriteria.weightFrom || gnome.weight >= searchCriteria.weightFrom)
			&& (!searchCriteria.weightTo || searchCriteria.weightTo >= gnome.weight)
			&& (!searchCriteria.heightFrom || gnome.height >= searchCriteria.heightFrom)
			&& (!searchCriteria.heightTo || searchCriteria.heightTo >= gnome.height)
			&& new RegExp(searchCriteria.hairColor, 'gi').test(gnome.hair_color)
			&& gnome.professions.find(profession => new RegExp(searchCriteria.profession, 'gi').test(profession))
		);
  }

}
