import type { NextPage } from "next"
import Head from "next/head"
import { RecentlyWatched } from "../components/Movies/RecentlyWatched"
import { IMovieDetails } from "../models/tmdb/movie"
import { getMovies } from "../services/tmdb/movies"

interface IAboutProps {
    movies: IMovieDetails[]
}

const About: NextPage<IAboutProps> = ({ movies }) => {
    return (
        <>
            <Head>
                <title>About - ksmallme</title>
                <meta name="description" content="About me!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RecentlyWatched movies={movies} />
        </>
    )
}

export async function getStaticProps() {
    const recentlyWatchedIds: number[] = [718930, 616037, 725201]
    const favouriteMovieIds: number[] = [284054, 27205, 286217, 157336, 62835, 640, 438631, 522627, 76341, 68726]
    const append = ["images", "release_dates"]
    const movies = await getMovies(recentlyWatchedIds, append)
    return {
        props: {
            movies
        }
    }
}

export default About
