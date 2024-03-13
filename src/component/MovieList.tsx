import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

interface MovieListProps {
  movies: Movie[];
  onDelete: (index: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onDelete }) => {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default MovieList;
