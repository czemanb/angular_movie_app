import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TmdbMovie } from '../model/TmdbMovie';
import { TmdbMovieResult } from '../model/TmdbMovieResult';
import { TmdbCredits } from '../model/TmdbCredits';
import { TmdbActor } from '../model/TmdbActor';
import { TmdbMovieDetials } from '../model/TmdbMovieDetails';

@Injectable({
  providedIn: 'root'
})
//Az Api hívásokat végző osztály
export class MovieService {
  //Base url
  private TmdbUrl= 'https://api.themoviedb.org/3';
  //Api kulcs
  private apiKey = '9355f187123c4d75d3b42eb01e94ac4d'; 
  //httpClient a hálózati kéresek hívásához
  constructor(private http: HttpClient) { }

  /**
   * //lekérdezi az apitól a legújabb filmeket
   * @returns Observable<TmdbMovieResult>
   */
  getNewMovies():Observable<TmdbMovieResult>{
      return this.http.get<TmdbMovieResult>(`${this.TmdbUrl}/movie/now_playing?api_key=${this.apiKey}`);
  }
  /**
   * //lekérdezi az apitól a legnépszerűbb filmeket
   * @returns Observable<TmdbMovieResult>
   */
  getPopularMovies():Observable<TmdbMovieResult>{
    return this.http.get<TmdbMovieResult>(`${this.TmdbUrl}/movie/popular?api_key=${this.apiKey}`); 
  }
  
  /**
   * lekérdezi az apitól a egy adott film részleteit
   * @param id film id ja
   * @returns Observable<TmdbMovieDetials>
   */
  getMovieDetail(id: number):Observable<TmdbMovieDetials>{
    return this.http.get<TmdbMovieDetials>(`${this.TmdbUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
  /**
   * lekérdezi az apitól a egy adott filmhez hasonló filmeket
   * @param id 
   * @returns Observable<TmdbMovieResult>
   */
  getSimilarMovies(id: number) :Observable<TmdbMovieResult> {
    return this.http.get<TmdbMovieResult>(`${this.TmdbUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }

  /**
   * lekérdezi az apitól a egy adott filmhez hasonló filmeket
   * @param id 
   * @returns Observable<TmdbCredits>
   */
  getMovieCredits(id: number):Observable<TmdbCredits>{
      return this.http.get<TmdbCredits>(`${this.TmdbUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  /**
   * megkeresi a paraméterben megadott szóhoz a filmeket
   * @param query lekérdezett film címe
   * @returns Observable<TmdbCredits>
   */
  searchMovies(query: String) : Observable<TmdbMovieResult> {
      return this.http.get<TmdbMovieResult>(`${this.TmdbUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  /**
   * apitól elkéri a színészek részletes adatait
   * @param id 
   * @returns Observable<TmdbActor>
   */
  getActorDetails(id: number) : Observable<TmdbActor>{
    return this.http.get<TmdbActor>(`${this.TmdbUrl}/person/${id}?api_key=${this.apiKey}`);
  }

}
