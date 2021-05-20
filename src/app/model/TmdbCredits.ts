import { TmdbCast } from "./TmdbCast";
import { TmdbCrew } from "./TmdbCrew";

//film Credit-it reprezentáló interfész
export interface TmdbCredits{
    id: number,
    cast: TmdbCast[];
    crew: TmdbCrew[];
}