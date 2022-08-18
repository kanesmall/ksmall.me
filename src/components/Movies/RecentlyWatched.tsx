import React from "react"
import Image from "next/image"
import { IBasicMovie } from "@/src/models/tmdb/movie"

interface IRecentlyWatchedProps {
    movies: IBasicMovie[]
}

export const RecentlyWatched: React.FC<IRecentlyWatchedProps> = ({ movies }) => {
    return (
        <section className="mx-auto max-w-[1070px] py-24 sm:py-36">
            <div className="flex flex-wrap gap-8">
                {movies.map((movie) => (
                    <div key={movie.id} className="relative h-[450px] w-full max-w-[300px] overflow-hidden rounded-xl">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={`${movie.title} thumbnail`}
                            layout="fill"
                        />
                        <div className="absolute right-5 bottom-5 z-50 h-9 w-9 rounded-full shadow-2xl shadow-red-700">
                            <Image src="/icons/movie-card-info-icon.svg" alt="Movie card info icon" layout="fill" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
