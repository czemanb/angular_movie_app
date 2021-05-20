import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActorComponent } from './actor/actor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMoviesComponent } from './new-movies/new-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    ActorComponent,
    NewMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    [NgbModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
