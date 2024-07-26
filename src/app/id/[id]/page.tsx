"use client";

import { useRouter } from "next/router";
import { Container } from "@/components";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import axios from "axios";
const page = async ({ params }: any) => {
  const { id } = params;
  const terpopuler = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        id: id
      },
    }
  );

  console.log(terpopuler, 'terpopuler');
  

  return (
    <Container>
      <MovieDetail />
    </Container>
  );
};

export default page;
