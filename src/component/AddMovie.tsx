import React, { useState } from 'react';
import MovieList from '../component/MovieList';

interface Movie {
  title: string;
  rating: number;
  genre: string;
  description: string;
}

const AddMovie: React.FC = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleAddMovie = () => {
    const newMovie: Movie = {
      title,
      rating,
      genre,
      description,
    };
    setMovies([...movies, newMovie]);
    setTitle('');
    setRating(0);
    setGenre('');
    setDescription('');
    console.log(newMovie);
  };

  const handleDeleteMovie = (index: number) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <h1>Add Movie</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="range" min={0} max={10} value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Select Genre</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
      </select>
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleAddMovie}>Add</button>
      <MovieList movies={movies} onDelete={handleDeleteMovie} />
    </div>
  );
};

export default AddMovie;
