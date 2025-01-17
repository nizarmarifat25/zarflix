"use client";

import { ImageBanner } from "./BannerElement";
import { BannerProps } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "..";
import Link from "next/link";

const Banner = ({ movies }: BannerProps) => {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <ImageBanner
              $backgroundImage={`${process.env.NEXT_PUBLIC_IMG_URL}${movie.backdrop_path}`}
            >
              <div className="title-wrapper">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <Link href={`/id/${movie.id}`} style={{zIndex:'1000'}}>
                  <Button>Watch Now</Button>
                </Link>
              </div>
            </ImageBanner>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
