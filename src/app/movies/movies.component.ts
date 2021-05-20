import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TmdbMovieResult } from '../model/TmdbMovieResult';
import { TmdbMovie } from '../model/TmdbMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
//főoldal és a legnépszerűbb filmekért felelős osztály
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  movies: TmdbMovie[] = [];
  //meghívom a loadmovies függvényt
  ngOnInit(): void {
    this.loadMovies();
  }

  //betölti a legújabb filmeket és visszatérési értéket átmappeli TmdbMovie[]
  loadMovies() {
    this.movieService.getPopularMovies().subscribe(movie => this.movies = movie.results!!);
  }


  


}


