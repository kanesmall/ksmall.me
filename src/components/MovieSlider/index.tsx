import React from "react"
import Image from "next/image"
import { IMovieDetails } from "@/src/models/tmdb/movie"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useModal } from "../Modal/ModalContext"

interface IMovieSliderProps {
    title?: string
    description?: string
    movies: IMovieDetails[]
}

export const MovieSlider: React.FC<IMovieSliderProps> = ({ title, description, movies }) => {
    const { show } = useModal()

    return (
        <section className="py-24 sm:py-36">
            {(title || description) && (
                <div className="mx-auto mb-16 max-w-[630px] text-center">
                    {title && <h2 className="font-sans text-5xl font-semibold text-white">{title}</h2>}
                    {description && <p className="mt-7 text-white">{description}</p>}
                </div>
            )}

            <Swiper spaceBetween={30} slidesPerView={"auto"} centeredSlides={true} loop={true}>
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="relative w-full max-w-[300px] overflow-hidden rounded-xl">
                        <div
                            className="relative h-[450px] cursor-pointer overflow-hidden rounded-xl"
                            onClick={() =>
                                show(
                                    <>
                                        <span className="mb-4 block text-3xl font-semibold text-white">
                                            {movie.title}
                                        </span>
                                        {Object.keys(movie["watch/providers"].results).length !== 0 &&
                                            movie["watch/providers"].results["GB"].flatrate &&
                                            movie["watch/providers"].results["GB"].flatrate.length !== 0 && (
                                                <div className="mb-4 flex flex-wrap gap-4">
                                                    {movie["watch/providers"].results["GB"].flatrate.map((provider) => (
                                                        <div className="flex flex-wrap items-center gap-3">
                                                            <div
                                                                key={provider.provider_id}
                                                                className="relative h-8 w-8 overflow-hidden rounded-md"
                                                            >
                                                                <Image
                                                                    src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                                                                    layout="fill"
                                                                />
                                                            </div>
                                                            <span className="text-white">{provider.provider_name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        <p className="font-normal text-white">{movie.overview}</p>
                                    </>
                                )
                            }
                        >
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
