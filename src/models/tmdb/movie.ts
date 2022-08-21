export interface IBasicMovie {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: Date
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export interface IGenre {
    id: number
    name: string
}

export interface IProductionCompany {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ICountry {
    iso_3166_1: string
    name: string
}

export interface ILocale {
    iso_639_1: string
    name: string
}

export interface IFlatRate {
    logo_path: string
    provider_id: number
    provider_name: string
}

export interface IWatchProvider {
    results: {
        GB: {
            flatrate: IFlatRate[]
        }
    }
}

// the /movie/{movie_id} endpoint adds these properties to the basic movie model
export interface IMovieDetails extends IBasicMovie {
    belongs_to_collection: unknown
    budget: number
    genres: IGenre[]
    imdb_id: string
    production_companies: IProductionCompany[]
    production_countries: ICountry[]
    revenue: number
    spoken_languages: ILocale[]
    status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled"
    tagline: string
    homepage: string
    runtime: number | null
    "watch/providers": IWatchProvider
}
