import React from "react"
import Image from "next/image"
import { IBasicMovie } from "@/src/models/tmdb/movie"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

interface IRecentlyWatchedProps {
    movies: IBasicMovie[]
}

export const RecentlyWatched: React.FC<IRecentlyWatchedProps> = ({ movies }) => {
    return (
        <section className="py-24 sm:py-36">
            <h2 className="mb-16 text-center font-sans text-5xl font-semibold text-white">Recently watched</h2>

            <Swiper spaceBetween={30} slidesPerView={"auto"} centeredSlides={true} loop={true}>
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="relative w-full max-w-[300px] overflow-hidden rounded-xl">
                        <div className="relative h-[450px] overflow-hidden rounded-xl">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={`${movie.title} thumbnail`}
                                layout="fill"
                            />
                            <div className="absolute right-5 bottom-5 z-50 h-9 w-9 rounded-full shadow-2xl shadow-red-700">
                                <Image src="/icons/movie-card-info-icon.svg" alt="Movie card info icon" layout="fill" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
