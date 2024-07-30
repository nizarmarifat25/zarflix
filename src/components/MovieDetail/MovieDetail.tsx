import React from "react";
import { MovieDetailProps, MovieImagesResponse } from "../../../types";
import {
  MovieDetailWrapper,
  MoviePoster,
  MovieDetails,
  GenreList,
  CompanyList,
  AdditionalInfo,
  Gallery,
} from "./MovieDetailElement";
import Link from "next/link";

interface MovieDetailComponentProps {
  detail: MovieDetailProps | null;
  gallery: MovieImagesResponse | null;
}

const MovieDetail = ({ detail, gallery }: MovieDetailComponentProps) => {
  if (!detail) {
    return <div>Loading...</div>;
  }

  const displayedImages = gallery?.backdrops.slice(0, 14) || [];

  return (
    <MovieDetailWrapper>
      <Link href="/">Back to List</Link>
      <MoviePoster>
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}/${detail.poster_path}`}
          alt={detail.title}
        />
      </MoviePoster>
      <Gallery>
        {displayedImages.map((image) => (
          <img
            key={image.file_path}
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/${image.file_path}`}
            alt="Movie backdrop"
          />
        ))}
      </Gallery>
      <MovieDetails>
        <h1>{detail.title}</h1>
        <p>{detail.tagline}</p>
        <p>{detail.overview}</p>
        <AdditionalInfo>
          <p>
            <strong>Release Date:</strong> {detail.release_date}
          </p>
          <p>
            <strong>Runtime:</strong> {detail.runtime} minutes
          </p>
          <GenreList>
            <strong>Genres:</strong>{" "}
            {detail.genres.map((genre) => genre.name).join(", ")}
          </GenreList>
          <CompanyList>
            <strong>Production Companies:</strong>{" "}
            {detail.production_companies
              .map((company) => company.name)
              .join(", ")}
          </CompanyList>
          <p>
            <strong>Revenue:</strong> ${detail.revenue.toLocaleString()}
          </p>
          <p>
            <strong>Vote Average:</strong> {detail.vote_average}
          </p>
          <p>
            <strong>Vote Count:</strong> {detail.vote_count}
          </p>
        </AdditionalInfo>
        <a href={detail.homepage} target="_blank" rel="noopener noreferrer">
          Official Website
        </a>
      </MovieDetails>
    </MovieDetailWrapper>
  );
};

export default MovieDetail;
