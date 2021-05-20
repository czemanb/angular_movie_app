import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbActor } from '../model/TmdbActor';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
//a színészek részletes adatai
export class ActorComponent implements OnInit {
  actor!: TmdbActor;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getActorDetails();
  }
  //lekérdezi a művész részletes adatait
  getActorDetails(){
    const id =Number(this.route.snapshot.paramMap.get('id'))
    this.movieService.getActorDetails(id).subscribe(actor => this.actor=actor);
  }
}
