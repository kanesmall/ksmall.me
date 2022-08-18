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
    const ids: number[] = [718930, 616037, 725201]
    const append = ["images", "release_dates"]
    const movies = await getMovies(ids, append)
    return {
        props: {
            movies
        }
    }
}

export default About
