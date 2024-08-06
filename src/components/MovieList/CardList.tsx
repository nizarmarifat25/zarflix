"use client";

import { Card, CardImage, CardTitle, StyledImage } from "./MovieListElement";
import { CardListProps } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Container } from "..";
import Link from "next/link";

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
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 7,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={`/id/${movie.id}`}>
              <Card>
                <CardImage>
                  <StyledImage
                    src={process.env.NEXT_PUBLIC_IMG_URL + movie.poster_path}
                    alt={movie.original_title}
                    fill
                    priority
                  />
                </CardImage>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CardList;
