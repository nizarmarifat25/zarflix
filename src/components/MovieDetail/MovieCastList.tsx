import React, { useEffect, useState } from "react";
import axios from "axios";
import { CastMember } from "../../../types";
import { CastList, CastItem, CastTitle } from "./MovieDetailElement";

interface MovieCastListProps {
  movieId: number;
}

const MovieCastList = ({ movieId }: MovieCastListProps) => {
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  const castImages = cast.slice(0, 14);

  return (
    <>
      <CastTitle>Cast</CastTitle>
      <CastList>
        {castImages.map((cast) => (
          <CastItem key={cast.cast_id}>
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/${cast.profile_path}`}
              alt={cast.name}
            />
            <p>{cast.name}</p>
            <p style={{ color: "red", fontWeight: "bold" }}>{cast.character}</p>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};

export default MovieCastList;
