import Banner from "@/components/Banner/Banner";
import CardList from "@/components/MovieList/CardList";
import Header from "@/components/MovieList/Header";
import axios from "axios";
import { Suspense } from "react";
import Loading from "./loading";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
  const terpopuler = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/popular`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );
  const aksi = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/top_rated`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );
  const kids = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/upcoming`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );

  const movieTerpopuler = terpopuler.data.results;
  const movieAksi = aksi.data.results;
  const movieKids = kids.data.results;

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <section>
          <Banner movies={movieAksi} />
        </section>
        <section>
          <Header title="Most Popular" url="/" />
          <CardList movies={movieTerpopuler} />
        </section>
        <section>
          <Header title="Action" url="/" />
          <CardList movies={movieAksi} />
        </section>
        <section>
          <Header title="Happy Animation" url="/" />
          <CardList movies={movieKids} />
        </section>
      </Suspense>
    </main>
  );
}
