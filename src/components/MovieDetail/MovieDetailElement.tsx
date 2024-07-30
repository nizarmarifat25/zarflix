import styled from "styled-components";

// Wrapper for the entire movie detail section
export const MovieDetailWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Styling for the movie poster
export const MoviePoster = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: cover;
  }
`;

// Styling for the movie details section
export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
  }

  strong {
    font-weight: 700;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #005bb5;
    }
  }
`;

// List of genres
export const GenreList = styled.p`
  font-size: 1rem;
  margin: 0;
`;

// List of production companies
export const CompanyList = styled.p`
  font-size: 1rem;
  margin: 0;
`;

// Wrapper for additional movie information
export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;

  p {
    margin: 0;
  }
`;

// Styling for the gallery section
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 30px;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
  }
`;
