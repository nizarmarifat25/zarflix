import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { MovieDetailProps, MovieImagesResponse, Movie } from '../../../types';
import {
  MovieDetailWrapper,
  MoviePosterAndInfo,
  MovieDetails,
  GenreList,
  GenreBadge,
  AdditionalInfo,
  BackgroundDetail,
  IconWrapper,
  BadgeIcon,
} from './MovieDetailElement';
import MovieVideos from './MovieVideo';
import MovieCastList from './MovieCastList';
import CardList from '../MovieList/CardList';
import axios from 'axios';
import Header from '../MovieList/Header';

interface MovieDetailComponentProps {
  detail: MovieDetailProps | null;
  gallery: MovieImagesResponse | null;
}

const MovieDetail = ({ detail, gallery }: MovieDetailComponentProps) => {
  const [relevantMovies, setRelevantMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (detail) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/movie`, {
          params: {
            api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
            with_genres: detail.genres[0].id,
          },
        })
        .then((response) => {
          setRelevantMovies(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [detail]);

  if (!detail) {
    return null;
  }

  const runtimeInHours = Math.floor(detail.runtime / 60);
  const runtimeInMinutes = detail.runtime % 60;

  return (
    <>
      <BackgroundDetail
        $backgroundImage={`${process.env.NEXT_PUBLIC_IMG_URL}${detail.backdrop_path}`}
      />
      <MovieDetailWrapper>
        <MoviePosterAndInfo>
          <img
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/${detail.poster_path}`}
            alt={detail.title}
          />
          <AdditionalInfo>
            <MovieDetails>
              <h1>{detail.title}</h1>
              <GenreList>
                {detail.genres.map((genre) => (
                  <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
                ))}
              </GenreList>
              <IconWrapper>
                <BadgeIcon color="#3498db">
                  <GiSandsOfTime size={20} />
                  {runtimeInHours}h {runtimeInMinutes}m
                </BadgeIcon>
                <BadgeIcon color="#f39c12">
                  <FaStar size={20} />
                  {detail.vote_average}
                </BadgeIcon>
              </IconWrapper>
              <p>{detail.tagline}</p>
              <p>{detail.overview}</p>
            </MovieDetails>
            {detail.homepage && (
              <a
                href={detail.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Website
              </a>
            )}
          </AdditionalInfo>
        </MoviePosterAndInfo>
        <MovieCastList movieId={detail.id} />
        <MovieVideos movieId={detail.id} />
        
      </MovieDetailWrapper>
      {loading ? (
          null
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
          <Header title="Relevant Movies" url="/" />
          <CardList movies={relevantMovies} />
          </>
        )}
    </>
  );
};

export default MovieDetail;
