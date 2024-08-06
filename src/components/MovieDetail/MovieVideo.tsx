// components/MovieVideos.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface MovieVideosProps {
  movieId: number;
}

const VideoContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VideoTitle = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin: 35px 0;
  color: white;
`;

const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const MovieVideos = ({ movieId }: MovieVideosProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_KEY;
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: { api_key: apiKey },
          }
        );
        setVideos(response.data.results);
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [movieId]);

  if (loading) return null;

  const filterCategories = ["Trailer", "Teaser", "Behind the Scenes"];

  const filteredVideos = videos.filter((video) =>
    filterCategories.includes(video.type)
  );

  const categorizeVideos = (videos: Video[]) => {
    const categories: { [key: string]: Video } = {};
    videos.forEach((video) => {
      const { type } = video;
      if (!categories[type]) {
        categories[type] = video;
      }
    });
    return categories;
  };

  const categorizedVideos = categorizeVideos(filteredVideos);

  return (
    <VideoContainer>
      <VideoTitle>Movie Videos</VideoTitle>
      {Object.keys(categorizedVideos).map((type) => (
        <div key={type}>
          <CategoryTitle>{type}</CategoryTitle>
          <VideoList>
            <VideoItem>
              <VideoWrapper>
                <VideoIframe
                  src={`https://www.youtube.com/embed/${categorizedVideos[type].key}`}
                  title={categorizedVideos[type].name}
                  allowFullScreen
                />
              </VideoWrapper>
            </VideoItem>
          </VideoList>
        </div>
      ))}
    </VideoContainer>
  );
};

export default MovieVideos;
