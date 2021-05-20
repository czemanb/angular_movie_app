import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TmdbCast } from '../model/TmdbCast';
import { TmdbMovie } from '../model/TmdbMovie';
import { TmdbMovieDetials } from '../model/TmdbMovieDetails';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
// a film részleteért felelős osztály
export class MovieDetailComponent implements OnInit {
  movie: TmdbMovieDetials;
  path: string;
  casts: TmdbCast[];
  similarMovies: TmdbMovie[];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
    this.getMovieCast();
    this.getRecomendMovie();
  }
  //lekérdezi a film részleteit
  getMovie(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(id).subscribe(movie => this.movie = movie);
  }
  //lekérdezi a film szereplőit
  getMovieCast(): void{
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieCredits(id).subscribe(cast => this.casts=cast.cast); 
  }
  //lekérdezi a hasonló filmeket
  getRecomendMovie():void{
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getSimilarMovies(id).subscribe(movies => this.similarMovies = movies.results!!);
  }

}
