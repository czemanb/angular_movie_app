import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';
//az alkalamzás route táblája
const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'actor/:id', component: ActorComponent},
  {path: 'newMovies', component: NewMoviesComponent},
  {path: 'search', component: MovieSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
