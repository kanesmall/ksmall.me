import type { NextPage } from "next"
import Head from "next/head"
import { MovieSlider } from "../components/MovieSlider"
import { IMovieDetails } from "../models/tmdb/movie"
import { getMovies } from "../services/tmdb/movies"

interface IAboutProps {
    recentlyWatchedMovies: IMovieDetails[]
    favouriteMovies: IMovieDetails[]
}

const About: NextPage<IAboutProps> = ({ recentlyWatchedMovies, favouriteMovies }) => {
    return (
        <>
            <Head>
                <title>About - ksmallme</title>
                <meta name="description" content="About me!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MovieSlider title="Recently watched" movies={recentlyWatchedMovies} />
            <MovieSlider
                title="A collection of some of my favourite films of all-time"
                description="(... for now)"
                movies={favouriteMovies}
            />
        </>
    )
}

export async function getStaticProps() {
    const recentlyWatchedIds: number[] = [718930, 616037, 725201]
    const favouriteMovieIds: number[] = [284054, 27205, 286217, 157336, 62835, 640, 438631, 522627, 76341, 68726]
    const append = ["watch/providers"]
    const recentlyWatchedMovies = await getMovies(recentlyWatchedIds, append)
    const favouriteMovies = await getMovies(favouriteMovieIds, append)
    return {
        props: {
            recentlyWatchedMovies,
            favouriteMovies
        }
    }
}

export default About
