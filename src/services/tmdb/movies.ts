import { IMovieDetails } from "@/src/models/tmdb/movie"

export const getMovies = async (movie_ids: number[], append?: string[]) => {
    const { TMDB_BASE_URL, TMDB_VERSION, TMDB_API_KEY } = process.env
    if (!TMDB_BASE_URL) throw new Error("The 'TMDB_BASE_URL' env variable must be set to use the getMovies service")
    if (!TMDB_VERSION) throw new Error("The 'TMDB_VERSION' env variable must be set to use the getMovies service")
    if (!TMDB_API_KEY) throw new Error("The 'TMDB_API_KEY' env variable must be set to use the getMovies service")
    const results: IMovieDetails[] = []

    for (const id of movie_ids) {
        let url = `${TMDB_BASE_URL}/${TMDB_VERSION}/movie/${id}?api_key=${TMDB_API_KEY}`
        if (append) url += `&append_to_response=${append.join(",")}`
        const result = await fetch(url)
        const test = await result.json()
        if (result.ok) results.push(test)
    }

    return results
}
