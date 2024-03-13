import React from "react";

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface MovieCardProps {
  movie: Movie;
  onDelete: () => void; // Adding onDelete prop
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onDelete }) => {
  const { title, rating, genre, description } = movie;

  return (
    <div className="movie-card">
      <div className="movie-info">
        <h2>{title}</h2>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Genre:</strong> {genre}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
      <button onClick={onDelete}>Delete</button> {/* Adding delete button */}
    </div>
  );
};

export default MovieCard;
