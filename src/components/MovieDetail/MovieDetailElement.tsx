import styled from "styled-components";

interface ImageBannerProps {
  $backgroundImage: string;
}

interface BadgeIconProps {
  color: string; /* Menambahkan prop untuk menentukan warna */
}

export const BackgroundDetail = styled.div<ImageBannerProps>`
  position: relative;
  overflow: hidden;
  background-position: center;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  height: 50vh;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(1, 1, 3, 1) 4%,
      rgba(255, 255, 255, 0) 25%
    );
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

// Wrapper for the entire movie detail section
export const MovieDetailWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: -200px auto auto auto; /* Retain margin as desired */
  overflow: hidden; /* Prevent content overflow */
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styling for the movie poster and additional info
export const MoviePosterAndInfo = styled.div`
  margin: 0 auto;
  padding: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 300px; /* Adjusted width to fit in the row layout */
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
`;

export const GenreBadge = styled.span`
  border: 2px solid white;
  color: white;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 0.9em;
  display: inline-block;
  margin-right: 10px;
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

export const CastTitle = styled.h2`
  font-size: 2rem;
  color: white;
  text-align: center;
`;

export const CastList = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CastItem = styled.div`
  width: 150px;
  margin: 10px;
  img {
    width: 100%;
    height: auto;
  }
  p {
    text-align: center;
    margin: 5px 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center; /* Memastikan ikon dan teks berada di tengah secara vertikal */
`;


export const BadgeIcon = styled.div<BadgeIconProps>`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${({ color }) => color}; /* Menggunakan prop warna */
  border-radius: 12px;
  color: #fff;
  margin-right: 10px;
  font-size: 14px; /* Ukuran font */
  svg {
    margin-right: 5px; /* Jarak antara ikon dan teks */
  }
`;