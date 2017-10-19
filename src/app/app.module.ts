import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GnomeSearchComponent } from './gnome-search/gnome-search.component';
import { GnomeDetailComponent } from './gnome-detail/gnome-detail.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';
import { GnomeListItemComponent } from './gnome-list-item/gnome-list-item.component';
import { GetGnomesService } from './get-gnomes.service';
import { GnomeFilterPipe } from './gnome-filter.pipe';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GnomeSearchComponent,
    GnomeDetailComponent,
    GnomeListItemComponent,
    GnomeListComponent,
    GnomeFilterPipe
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
  ],
  providers: [GetGnomesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
