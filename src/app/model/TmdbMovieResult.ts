import { TmdbMovie } from "./TmdbMovie";

export interface TmdbMovieResult {
    page?: number,
    results?: TmdbMovie[], 
    total_results?: number,
    total_pages?: number,
}