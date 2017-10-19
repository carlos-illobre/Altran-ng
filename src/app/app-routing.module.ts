import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GnomeDetailComponent } from './gnome-detail/gnome-detail.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';
 
@NgModule({
  imports: [ RouterModule.forRoot([
		{
			path: '',
			redirectTo: '/gnomes',
			pathMatch: 'full',
		},{
			path: 'gnomes',
			component: GnomeListComponent,
		},{
			path: 'gnomes/:id',
			component: GnomeDetailComponent,
		},
	]) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
