"use client";

import { Card, CardImage, CardTitle, GridContainer } from "./MovieListElement";
import Image from "next/image";
import { CardListProps } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "..";

const CardList = ({ movies }: CardListProps) => {
  return (
    <Container>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card>
              <CardImage>
                <Image
                  src={process.env.NEXT_PUBLIC_IMG_URL + movie.backdrop_path}
                  alt={movie.original_title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </CardImage>
              <CardTitle>
                <h3>{movie.original_title}</h3>
                <small>{movie.release_date.split("-")[0]}</small>
              </CardTitle>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardList;
