import Banner from "@/components/Banner/Banner";
import CardList from "@/components/MovieList/CardList";
import Header from "@/components/MovieList/Header";
import axios from "axios";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const terpopuler = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
      },
    }
  );
  const aksi = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        with_genres: 28,
      },
    }
  );
  const kids = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`,
    {
      params: {
        api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
        with_genres: 16,
      },
    }
  );

  const movieTerpopuler = terpopuler.data.results;
  const movieAksi = aksi.data.results;
  const movieKids = kids.data.results;

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <section>
          <Banner movies={movieAksi} />
        </section>
        <section>
          <Header title="Terpopuler" url="/" />
          <CardList movies={movieTerpopuler} />
        </section>
        <section>
          <Header title="Aksi" url="/" />
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
