import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TmdbMovie } from '../model/TmdbMovie';
import { TmdbMovieResult } from '../model/TmdbMovieResult';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
//a filmek keresésért felelős komponens
export class MovieSearchComponent implements OnInit {
  query: string; 
  searchRes: TmdbMovie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
  }
  //a megadott szó alpaján le kéri a fiilmeket és visszatérési értéket átmappeli TmdbMovie[]
  searchMovies() {
    this.movieService.searchMovies(this.query).subscribe(movies => {this.searchRes=movies.results!!});
  }

}
