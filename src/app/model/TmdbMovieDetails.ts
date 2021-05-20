import { TmdbGenre } from "./TmdbGenre";
import { TmdbProductionCompany } from "./TmdbProductionCompany";
import { TmdbProductionCountry } from "./TmdbProductionCountry";
import { TmdbSpokenLanguage } from "./TmdbSpokenLanguage";
// film részleteit reprezentáló interfész
export interface TmdbMovieDetials{
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null,
    budget: number,
    genres: TmdbGenre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies:  TmdbProductionCompany[],
    production_countries: TmdbProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number | null;
    spoken_languages: TmdbSpokenLanguage[],
    status: string,
    tagline: string  | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}