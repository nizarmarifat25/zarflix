"use client";

import { Container } from "@/components";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import axios from "axios";
import { useEffect, useState } from "react";
import { MovieDetailProps, MovieImagesResponse } from "../../../../types";

const Page = ({ params }: any) => {
  const { id } = params;
  const [movie, setMovie] = useState<MovieDetailProps | null>(null);
  const [gallery, setGallery] = useState<MovieImagesResponse | null>(null);

  const getDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        }
      );
      setMovie(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  const getGallery = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${id}/images`,
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
          },
        }
      );
      setGallery(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getDetail();
      getGallery();
    }
  }, [id]); // Add id as a dependency to ensure effect runs when id changes

  return (
    <Container>
      <MovieDetail detail={movie} gallery={gallery} />
    </Container>
  );
};

export default Page;
