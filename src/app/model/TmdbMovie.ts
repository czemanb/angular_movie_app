import { TmdbGenre } from "./TmdbGenre";
import { TmdbProductionCompany } from "./TmdbProductionCompany";
import { TmdbProductionCountry } from "./TmdbProductionCountry";
import { TmdbSpokenLanguage } from "./TmdbSpokenLanguage";
// film adatait reprezentáló interfész
export interface TmdbMovie {
    poster_path?: string | null,
    adult?: boolean,
    overview?: string | null,
    release_date?: string,
    genre_ids?: number,
    id?: number,
    original_title?: string,
    original_language?: string,
    title: string,
    backdrop_path?: string | null,
    popularity?: number,
    vote_count?: number,
    video?: boolean,
    vote_average?: number,
  }