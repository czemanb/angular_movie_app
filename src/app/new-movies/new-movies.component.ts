import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbMovie } from '../model/TmdbMovie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
//a legújabb filmekért felelős osztály
export class NewMoviesComponent implements OnInit {

  constructor(private movieService: MovieService,private route: ActivatedRoute) { }
  movies: TmdbMovie[]; 

  ngOnInit(): void {
    this.getNewMovies();
  }
  //felirakozik a getNewMovies() fgvre és visszaadott értéket elmenti a movies változóba
  getNewMovies():void{
    this.movieService.getNewMovies().subscribe(movies => this.movies = movies.results!!);
  }

}
