// színészek adatait reprezentáló interfész
export interface TmdbActor {
    birthday: string,
    known_for_department: string,
    deathday: string | null,
    id: number,
    name: string,
    also_known_as: string[],
    gender: number,
    biography: string,
    popularity: number,
    place_of_birth: string | null,
    profile_path: string | null,
    adult: boolean,
    imdb_id: number,
    homepage: string | null
} 